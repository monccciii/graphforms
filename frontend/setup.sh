#!/bin/bash

env_file=".env"
env_local_file=".env.local"

if [ ! -f "$env_file" ]; then
  echo "Error: $env_file does not exist."
  exit 1
fi

if [ -f "$env_local_file" ]; then
  rm "$env_local_file"
fi

while IFS= read -r line || [[ -n "$line" ]]; do
  if [[ ! -z "$line" && "$line" != "#"* ]]; then
    echo "$line" >> "$env_local_file"
  fi
done < "$env_file"

echo "Environment variables moved to $env_local_file"
