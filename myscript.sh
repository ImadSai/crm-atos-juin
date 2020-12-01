for i in $(find Benchmark-results -type f -name '*.json'); do

  MODULE="module test"

  echo "File : $i"
  fileContent=$(cat $i);

  for key in $(jq '. | keys | .[]' <<< "$fileContent"); do
        
        # Set Benchmark Informations 
        benchmark_informations=$(jq -r ".[$key]" <<< "$fileContent");
          
        # Set class informations
        classe_informations=$(jq -r ".benchmark" <<< "$benchmark_informations");
        CLASS=$(echo $classe_informations | rev | cut -d\. -f2 | rev)
        METHOD=$(echo $classe_informations | rev | cut -d\. -f1 | rev)

        # Set Mode Benchmark
        MODE=$(jq -r ".mode" <<< "$benchmark_informations");

        # Set Benchmark Results
        benchmark_result=$(jq -r ".primaryMetric" <<< "$benchmark_informations");

        # Set Score and Score Unit
        RESULT=$(jq -r ".score" <<< "$benchmark_result");
        SCORE_UNIT=$(jq -r ".scoreUnit" <<< "$benchmark_result");

        # Creation de notre Object
        benchmarkInformatons="{\"module\":\"$MODULE\",\"class\":\"$CLASS\",\"method\":\"$METHOD\",\"mode\":\"$MODE\",\"result\":$RESULT,\"score_unit\":\"$SCORE_UNIT\"}"
        echo $benchmarkInformatons;

        # Push de l'Object à Logstash
        #TODO port 60011
  done;

  echo "DONE"
done;
