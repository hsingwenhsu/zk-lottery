#!/usr/local/bin bash

bit=$1

. ./create_witness.sh $bit 1>&2
. ./generate_proof.sh 1>&2
result=`. ./verify.sh | tail -n 1`
reveal=`cat witness | head -n 1 | cut -d ' ' -f 2`
echo $result