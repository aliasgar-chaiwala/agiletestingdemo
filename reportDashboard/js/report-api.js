/**
 * Created by preritmogre on 1/29/16.
 */
$(document).ready(function(){


    var source = document.getElementById('table-row').innerHTML;
    var source1 = document.getElementById('progress-row').innerHTML;
    var template = Handlebars.compile(source);
    var template1 = Handlebars.compile(source1);
    $.getJSON( "./data/data-staging.json", function( data ) {
        var output = template(data);
        document.getElementById('tr').innerHTML = output;


        var  pass = 0,
            fail = 0,
            skip = 0,
            undefined = 0;
        var test_results = [];

        //var p = 0;
        //var f = 0;
        //var u = 0;
        //var s = 0;

        for (var i=0; i< data.length ; i++) {

            for (var j = 0;j < data[i].elements.length ; j++){
                test_results[i]= data[i].elements;
             test_results[i].featureName= data[i].name;
                /*    test_results[i].scenarioName= data[i].elements[j].name;
                test_results[i].totalpassed = null;
                test_results[i].totalfailed = null;
                test_results[i].totalundefined = null;
                test_results[i].totalskipped = null;
                test_results[i].totalsteps =  data[i].elements[j].steps.length;*/
                for (var k = 0; k< data[i].elements[j].steps.length ; k++){


                    if(data[i].elements[j].steps[k].result.status == 'passed'){
                        pass++;
                        //p++;
                        //test_results[i].totalpassed = p;

                        //test_results[data[i].id.elements]= data[i].elements[j];
                    }
                    else if (data[i].elements[j].steps[k].result.status == 'failed')
                    {
                        fail++;
                        //f++;
                        //test_results[i].totalfailed = f;
                        //output+="<td> " +"<font color='red'>" + data[i].elements[j].steps[k].result.error_message +"</font>"+ "</td> "+ "</tr>" ;
                    }
                    else if (data[i].elements[j].steps[k].result.status == 'undefined')
                    {
                        undefined++;
                        //u++;
                        //test_results[i].totalundefined = u;


                    }
                    else if (data[i].elements[j].steps[k].result.status == 'skipped')
                    {
                        skip++;
                        //s++;
                        //test_results[i].totalskipped = s;


                    }
                  //  test_results[i].percentageComplete = ((test_results[i].totalpassed / data[i].elements[j].steps.length) * 100).toFixed(0);


                }

              /*  p = 0;
                     f = 0;
                     u = 0;
                     s = 0;*/
            }

        }

        test_results.featuresSuccessful = 0;


       for (var f=0; f < test_results.length; f++) {
           test_results[f].totalPassed=0;
           test_results[f].totalFailed=0;
           test_results[f].totalSkipped=0;
           test_results[f].totalUndefined=0;
           for (var s = 0; s < test_results[f].length; s++) {
               for (var st = 0; st < test_results[f][s].steps.length; st++) {
                   if (test_results[f][s].steps[st].result.status == 'passed') {

                       test_results[f].totalPassed++;

                   } else if (test_results[f][s].steps[st].result.status == 'failed') {

                       test_results[f].totalFailed++;

                   } else if (test_results[f][s].steps[st].result.status == 'skipped') {

                       test_results[f].totalSkipped++;

                   }else if (test_results[f][s].steps[st].result.status == 'undefined') {

                       test_results[f].totalUndefined++;

                   }
               }




           }
           test_results[f].totalSteps = test_results[f].totalPassed + test_results[f].totalFailed +test_results[f].totalSkipped+ test_results[f].totalUndefined;
           test_results[f].percentageComplete = ((test_results[f].totalPassed / test_results[f].totalSteps)*100).toFixed(0);
           if(test_results[f].percentageComplete === "100"){
               test_results[f].featureComplete = true;
           }else {
               test_results[f].featureComplete = false;
           }
           if(test_results[f].featureComplete = true){
               test_results.featuresSuccessful++;
           } 
       }
        console.log(test_results);
        test_results.totalFeatures = test_results.length;

        var output1 = template1(test_results);
        document.getElementById('progress-feat').innerHTML = output1;
        $('#total-passed ').text(pass);
        $('#total-failed ').text(fail);
        $('#total-error ').text(skip + undefined);
        //console.log(test_results);

    });


});
