 //credit Google with code sample
 
 
 /*
  * Area for my Google Viz style objects: fonts, colors &c.
  *  moved to GoogleStyleObs
  */

 /*
  * set aside an area of your javascript file where you define all of these objects that you're going to reuse
  * Can put all of my style objects for Google Visualizations into a separate js file
  * This is now in GoogleStyleObs
  */
 
  // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

		var myDataArray = [];
		
		var myObs = alltheData.observations; 
		
		for(var i=0; i<myObs.length; i++){
			
			var Item = [];
			
				Item.push(myObs[i].date);
				Item.push(Number(myObs[i].value));
				
				myDataArray.push(Item);
			
		} 
		

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows(myDataArray);
        
        // Set chart options 
      	//options is my variable
        var options = {'title':'Pizza Eating Session',
                       'width':600,
                       'height':500,
                       'hAxis':{}, //end of hAxis
                       'vAxis':{} //end of vAxis 
                       /*
                        *The set of curly braces above means there's an empty object.
                        *It needs to be there in order to add stuff to it.
                        *It's the placeholder. Have to tell object that the property exists
                        *and then you can add things to that property
                        */  
                      }; //end of options
                      
            options.hAxis.textStyle = myTextStyle; //Go to variable named options and then property called hAxis and create a property called TextStyle and in that object bucket, put the stuff that is in the variable called my text style.
            options.height = 600; //resets property of height to 600
            console.log(options.height) //to get it to console log 500, say options.height 

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      } //end of drawChart