#!/usr/local/bin bash

input=reveal_bit
secret=`cat secret.txt`
index=$1
output=witness

zokrates compute-witness -i $input -a $secret $index -o witness