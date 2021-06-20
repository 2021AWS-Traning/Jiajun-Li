aws kms encrypt  --profile beach \
--region ap-southeast-2 \
--key-id a54059ac-e4bb-44a5-b921-ad5bfcb73666 \
--cli-binary-format raw-in-base64-out \
--plaintext 'hi' \
--output text \
--query CiphertextBlob | base64 --decode > ../output.dat
