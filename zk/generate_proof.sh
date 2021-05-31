#!/usr/local/bin bash

input=reveal_bit
proof=proof.json
proofKey=proving.key
witness=witness

zokrates generate-proof -i $input -j $proof -p $proofKey -w $witness