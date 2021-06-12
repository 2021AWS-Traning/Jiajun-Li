#!/bin/bash -e
PLAINTEXT=$(jq '.Plaintext' ../decrypted.json)
echo "${PLAINTEXT}" | base64 --decode
