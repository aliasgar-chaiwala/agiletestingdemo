/**
 * Created by preritmogre on 1/29/16.
 */

$(document).ready(function(){

    $.getJSON( "config.json", function (config) {

        var ui = config.ui;
        var staging  = ui.staging;
        var demo  = ui.demo;
        var review  = ui.review;



        var source = document.getElementById('table-row').innerHTML;
        var source1 = document.getElementById('progress-row').innerHTML;
        var template = Handlebars.compile(source);
        var template1 = Handlebars.compile(source1);
        var stagingTab = $('#ui-tabs-staging');
        var demoTab = $('#ui-tabs-demo');
        var reviewTab = $('#ui-tabs-review');
        var parser = function(data) {
            $('#tab-body').removeClass('hide');
            $('#tab-body').siblings('.loadError').addClass('hide');
            var output = template(data);
            document.getElementById('tr').innerHTML = output;


            var pass = 0,
                fail = 0,
                skip = 0,
                undefined = 0;
            var test_results = [];
            test_results.totalFeatScenariosPassed=0;
            test_results.totalFeatScenarios=0;
            test_results.totalFeatScenariosFailing=0;


            for (var i=0; i< data.length ; i++) {

                for (var j = 0;j < data[i].elements.length ; j++){
                    test_results[i]= data[i].elements;
                    test_results[i].featureName= data[i].name;

                    for (var k = 0; k< data[i].elements[j].steps.length ; k++){


                        if(data[i].elements[j].steps[k].result.status == 'passed'){
                            pass++;
                        }
                        else if (data[i].elements[j].steps[k].result.status == 'failed')
                        {
                            fail++;
                        }
                        else if (data[i].elements[j].steps[k].result.status == 'undefined')
                        {
                            undefined++;
                        }
                        else if (data[i].elements[j].steps[k].result.status == 'skipped')
                        {
                            skip++;


                        }


                    }

                }

            }



            for (var f=0; f < test_results.length; f++) {
                test_results[f].totalScenarioPassed=0;
                test_results[f].totalScenarios=0;

                for (var s = 0; s < test_results[f].length; s++) {
                    test_results[f][s].stepsPassed=0;
                    test_results[f][s].stepsFailed=0;
                    test_results[f][s].stepsSkipped=0;
                    test_results[f][s].stepsUndefined=0;
                    test_results[f][s].scenarioPassed=false;

                    for (var st = 0; st < test_results[f][s].steps.length; st++) {

                        if (test_results[f][s].steps[st].result.status == 'passed') {
                            test_results[f][s].stepsPassed++;
                            // test_results[f].totalPassed++;


                        } else if (test_results[f][s].steps[st].result.status == 'failed') {
                            test_results[f][s].stepsFailed++;

                            // test_results[f].totalFailed++;


                        } else if (test_results[f][s].steps[st].result.status == 'skipped') {
                            test_results[f][s].stepsSkipped++;

                            // test_results[f].totalSkipped++;


                        }else if (test_results[f][s].steps[st].result.status == 'undefined') {
                            test_results[f][s].stepsUndefined++;

                            // test_results[f].totalUndefined++;


                        }



                    }

                    if(test_results[f][s].stepsPassed == test_results[f][s].steps.length ){
                        test_results[f][s].scenarioPassed=true;
                    }

                    if(test_results[f][s].scenarioPassed == true ){
                        test_results[f].totalScenarioPassed++;
                    }

                    test_results[f].totalScenarios = test_results[f].length;
                    test_results[f].percentageComplete = ((test_results[f].totalScenarioPassed / test_results[f].totalScenarios)*100).toFixed(0);



                }
                /*                test_results[f].totalSteps = test_results[f][s].stepsPassed + test_results[f][s].stepsFailed +test_results[f][s].stepsSkipped+ test_results[f][s].stepsUndefined;
                 test_results[f].percentageComplete = ((test_results[f].totalScenarioPassed / test_results[f].totalSteps)*100).toFixed(0);
                 if(test_results[f].percentageComplete === "100"){
                 test_results[f].featureComplete = true;
                 }else {
                 test_results[f].featureComplete = false;
                 }*/
                test_results.totalFeatScenariosPassed = test_results.totalFeatScenariosPassed + test_results[f].totalScenarioPassed;
                test_results.totalFeatScenarios = test_results.totalFeatScenarios  + test_results[f].totalScenarios;
                test_results.totalFeatScenariosFailing = test_results.totalFeatScenarios  - test_results.totalFeatScenariosPassed;

            }
            test_results.totalFeatures = test_results.length;
            console.log(test_results);
            var output1 = template1(test_results);
            document.getElementById('progress-feat').innerHTML = output1;

            $('#total-passed ').text(test_results.totalFeatScenariosPassed);
            $('#total-failed ').text(test_results.totalFeatScenariosFailing);
            $('#total-scenarios ').text(test_results.totalFeatScenarios);
            $('#total ').text(test_results.totalFeatures);

        };
        var error = function() {
            $('#tab-body').addClass('hide');
            $('#tab-body').siblings('.loadError').removeClass('hide');
        };


        // Staging Environment
        stagingTab.click(function () {
            $.getJSON( staging.url , parser).fail(error);
            $('#last-run ').text(staging.lastRun);

        });
        stagingTab.trigger('click'); //Triggers Staging Data to be loaded



        // Demo Environment
        demoTab.click(function () {
            $.getJSON(demo.url,parser).fail(error);
            $('#last-run ').text(demo.lastRun);

        });

        // Review Environment
        reviewTab.click(function () {
            $.getJSON( review.url, parser).fail(error);
            $('#last-run ').text(review.lastRun);

        });

    }).fail(function () {
        console.log('error');
    });
});
