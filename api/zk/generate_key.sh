#!/usr/local/bin bash

input=reveal_bit
proofKey=proving.key
verificationKey=verification.key


zokrates setup -i $input -p $proofKey -v $verificationKey