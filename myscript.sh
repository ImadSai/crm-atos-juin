for i in $(find Benchmark-results -type f); do
  fileContent=$(cat $i);

  for key in $(jq '. | keys | .[]' <<< "$fileContent"); do
        
        # Set Benchmark Result 
        benchmarkResult=$(jq -r ".[$key]" <<< "$fileContent");
          
        # Set class informations
        classe_informations=$(jq -r ".benchmark" <<< "$benchmarkResult");

        echo $classe_informations

        MODULE="module test"
        CLASS="class test"
        METHOD="Method test"
        MODE="AVG test"
        RESULT=0.10
        SCORE_UNIT="ms/s test"

        #benchmarkInformatons="{\"module\":\"$MODULE\",\"class\":\"$CLASS\",\"method\":\"$METHOD\",\"mode\":\"$MODE\",\"result\":$RESULT,\"score_unit\":\"$SCORE_UNIT\"}"
        #echo $benchmarkInformatons;
  done;
done;
