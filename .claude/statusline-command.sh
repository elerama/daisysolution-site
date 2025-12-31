#!/bin/bash

input=$(cat)
model=$(echo "$input" | jq -r '.model.display_name')
current_dir=$(echo "$input" | jq -r '.workspace.current_dir')
user=$(whoami)
host=$(hostname -s)
git_branch=""
if git -C "$current_dir" rev-parse --git-dir > /dev/null 2>&1; then
    branch=$(git -C "$current_dir" branch --show-current 2>/dev/null)
    if [ -n "$branch" ]; then
        git_branch=" (git:$branch)"
    fi
fi
printf "\033[01;32m%s@%s\033[00m:\033[01;34m%s\033[00m\033[33m%s\033[00m \033[36m[%s]\033[00m" \
    "$user" "$host" "$current_dir" "$git_branch" "$model"
