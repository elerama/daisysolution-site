#!/usr/bin/env npx ts-node
/**
 * Module Validation Script
 *
 * Validates all module data for completeness and consistency.
 * Run with: npx ts-node scripts/validate-modules.ts
 */

import { allModules, moduleSlugs, isModuleComplete, hasMinimalContent } from '../src/data/modules'
import type { ModuleData } from '../src/data/modules'

interface ValidationResult {
  slug: string
  isComplete: boolean
  hasMinimalContent: boolean
  errors: string[]
  warnings: string[]
}

function validateModule(mod: ModuleData): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  // Required fields
  if (!mod.slug) errors.push('Missing slug')
  if (!mod.name) errors.push('Missing name')
  if (!mod.tagline) errors.push('Missing tagline')
  if (!mod.category) errors.push('Missing category')
  if (!mod.categoryColor) errors.push('Missing categoryColor')
  if (!mod.icon) errors.push('Missing icon')
  if (mod.tier !== 1 && mod.tier !== 2) errors.push('Invalid tier (must be 1 or 2)')

  // Overview validation
  if (!mod.overview) {
    errors.push('Missing overview object')
  } else {
    if (!mod.overview.intro || mod.overview.intro.length < 50) {
      warnings.push('Overview intro is too short (< 50 chars)')
    }
    if (!mod.overview.mainBenefits || mod.overview.mainBenefits.length < 3) {
      warnings.push('Less than 3 main benefits')
    }
  }

  // Features validation
  if (!mod.features || mod.features.length === 0) {
    errors.push('No features defined')
  } else if (mod.features.length < 4) {
    warnings.push(`Only ${mod.features.length} features (recommended: 4+)`)
  }

  // Benefits validation
  if (!mod.benefits || mod.benefits.length === 0) {
    errors.push('No benefits defined')
  } else if (mod.benefits.length < 2) {
    warnings.push(`Only ${mod.benefits.length} benefit(s) (recommended: 2+)`)
  }

  // Use case validation
  if (!mod.useCase) {
    errors.push('Missing useCase object')
  } else {
    if (!mod.useCase.challenge) warnings.push('Missing useCase.challenge')
    if (!mod.useCase.solution) warnings.push('Missing useCase.solution')
    if (!mod.useCase.results || mod.useCase.results.length === 0) {
      warnings.push('No useCase results')
    }
  }

  // Integrations validation
  if (!mod.integrations || mod.integrations.length === 0) {
    warnings.push('No integrations defined')
  }

  // FAQ validation
  if (!mod.faq || mod.faq.length === 0) {
    warnings.push('No FAQ items defined')
  } else if (mod.faq.length < 3) {
    warnings.push(`Only ${mod.faq.length} FAQ item(s) (recommended: 3+)`)
  }

  // Meta validation
  if (!mod._meta) {
    errors.push('Missing _meta object')
  }

  // Integration slug validation (check references exist)
  if (mod.integrations) {
    for (const integration of mod.integrations) {
      if (!moduleSlugs.includes(integration.slug)) {
        warnings.push(`Integration references unknown slug: ${integration.slug}`)
      }
    }
  }

  return {
    slug: mod.slug,
    isComplete: isModuleComplete(mod),
    hasMinimalContent: hasMinimalContent(mod),
    errors,
    warnings,
  }
}

function runValidation() {
  console.log('🔍 Validating modules...\n')

  const results: ValidationResult[] = allModules.map(validateModule)

  let totalErrors = 0
  let totalWarnings = 0

  // Group by tier
  const tier1Results = results.filter((r) =>
    allModules.find((m) => m.slug === r.slug)?.tier === 1
  )
  const tier2Results = results.filter((r) =>
    allModules.find((m) => m.slug === r.slug)?.tier === 2
  )

  console.log('═══════════════════════════════════════════════════════════')
  console.log('                    TIER 1 - Core Modules                   ')
  console.log('═══════════════════════════════════════════════════════════\n')

  for (const result of tier1Results) {
    printResult(result)
    totalErrors += result.errors.length
    totalWarnings += result.warnings.length
  }

  console.log('\n═══════════════════════════════════════════════════════════')
  console.log('                  TIER 2 - Support Modules                  ')
  console.log('═══════════════════════════════════════════════════════════\n')

  for (const result of tier2Results) {
    printResult(result)
    totalErrors += result.errors.length
    totalWarnings += result.warnings.length
  }

  // Summary
  console.log('\n═══════════════════════════════════════════════════════════')
  console.log('                         SUMMARY                            ')
  console.log('═══════════════════════════════════════════════════════════\n')

  const completeCount = results.filter((r) => r.isComplete).length
  const minimalCount = results.filter((r) => r.hasMinimalContent).length

  console.log(`📦 Total modules: ${allModules.length}`)
  console.log(`   - Tier 1: ${tier1Results.length}`)
  console.log(`   - Tier 2: ${tier2Results.length}`)
  console.log('')
  console.log(`✅ Complete: ${completeCount}/${allModules.length}`)
  console.log(`📝 Has minimal content: ${minimalCount}/${allModules.length}`)
  console.log('')
  console.log(`❌ Errors: ${totalErrors}`)
  console.log(`⚠️  Warnings: ${totalWarnings}`)

  if (totalErrors > 0) {
    console.log('\n❌ Validation FAILED - please fix errors above')
    process.exit(1)
  } else if (totalWarnings > 0) {
    console.log('\n⚠️  Validation passed with warnings')
    process.exit(0)
  } else {
    console.log('\n✅ All modules validated successfully!')
    process.exit(0)
  }
}

function printResult(result: ValidationResult) {
  const status = result.errors.length > 0 ? '❌' : result.warnings.length > 0 ? '⚠️' : '✅'
  const completeTag = result.isComplete ? '(complete)' : '(incomplete)'

  console.log(`${status} ${result.slug} ${completeTag}`)

  for (const error of result.errors) {
    console.log(`   ❌ ${error}`)
  }

  for (const warning of result.warnings) {
    console.log(`   ⚠️  ${warning}`)
  }

  if (result.errors.length === 0 && result.warnings.length === 0) {
    console.log('   All checks passed')
  }

  console.log('')
}

runValidation()
