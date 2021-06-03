#!/usr/local/bin bash

input=reveal_bit
secret=`cat secret.txt`
index=10
output=witness

zokrates compute-witness -i $input -a $secret $index -o witness