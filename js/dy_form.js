$(function(){
$('#year').keyup(function(){
  var year=$('#year').val();
  $('#uName').val('');
  $('#uAdd').val('');
  $('#uNum').val('');
  $('#uEmail').val('');
  $('#uWeb').val('');
  $('#uLand').val('');
  $('#uOwn').val('');
  $('#uRent').val('');
  $('#uNumSchool').val('');
  $('#uNumDepartment').val('');

    $.post('search/uniInfoSearch.php',{input:year},function(data){
      var data1= JSON.parse(data);

      $('#uName').val(data1[0].University_Name);
      $('#uAdd').val(data1[0].University_Address);
      $('#uNum').val(data1[0].University_Contact);
      $('#uEmail').val(data1[0].University_Email);
      $('#uWeb').val(data1[0].University_Website);
      $('#uLand').val(data1[0].University_land_Acre);
      $('#uOwn').val(data1[0].University_Physical_Structure_owned_acre);
      $('#uRent').val(data1[0].University_Physical_Structure_rented);
      $('#uNumSchool').val(data1[0].No_Of_Schools);
      $('#uNumDepartment').val(data1[0].Department);

    });

});

$('#teacheryear').keyup(function(){
  var teacheryear1=$('#teacheryear').val();
  $('#NoOfTeachers').val('');
  $('#noofAdjunctteachers').val('');
  $('#noofPHD').val('');
  $('#noofprof').val('');
  $('#noofAssocProf').val('');
  $('#noofassProf').val('');
  $('#noofLect').val('');

    $.post('search/teacherinfosearch.php',{tinput:teacheryear1},function(data12){
      var data2= JSON.parse(data12);

       $('#NoOfTeachers').val(data2[0].Total_Teacher);
       $('#noofAdjunctteachers').val(data2[0].Total_Teacher_Adjunct);
       $('#noofPHD').val(data2[0].Total_Teacher_grad_PhD);
       $('#noofprof').val(data2[0].Professor);
       $('#noofAssocProf').val(data2[0].Associate_Professor);
       $('#noofassProf').val(data2[0].Assistant_Professor);
       $('#noofLect').val(data2[0].Lecturer);

    });})
$('#stdyear').keyup(function(){

  $('#stdadmitted').val('');
  $('#stdfemaleadmitted').val('');
  $('#stdstud').val('');
  $('#stfemstud').val('');
  $('#noofstdUND').val('');
  $('#noOFstudUNDhons').val('');
  $('#stdpassUND').val('');
  $('#stdpassHons').val('');
  $('#stdpassENG').val('');
  $('#stdpassgrad').val('');
  $('#stdpassgradENG').val('');
  $('#povertystd').val('');
  $('#ffstd').val('');

      var stdyear1=$('#stdyear').val();
        $.post('search/stdinfosearch.php',{sinput:stdyear1},function(data13){

           var data3= JSON.parse(data13);

            $('#stdadmitted').val(data3[0].Admitted_Student);
            $('#stdfemaleadmitted').val(data3[0].Female_Student);
            $('#stdstud').val(data3[0].Total_Student_Studying);
            $('#stfemstud').val(data3[0].Total_Female_Student_Studying);
            $('#noofstdUND').val(data3[0].Undergraduate_pass);
            $('#noOFstudUNDhons').val(data3[0].Undergraduate_Hons);
            $('#stdpassUND').val(data3[0].Undergraduate_Passed_Student_Normal);
            $('#stdpassHons').val(data3[0].Undergraduate_Passed_Student_Hons);
            $('#stdpassENG').val(data3[0].Undergraduate_Passed_Student_Eng_tech);
            $('#stdpassgrad').val(data3[0].Graduate_Passed_Student_Normal);
            $('#stdpassgradENG').val(data3[0].Graduate_Passed_Student_Eng_tech);
            $('#povertystd').val(data3[0].Student_Proverty);
            $('#ffstd').val(data3[0].Student_Freedom_Fighter);


        });

});
$('#RPyear').keyup(function(){
  $('#noofRP').val('');
  $('#RPCom').val('');
  $('#forRPpub').val('');
  $('#locRPpub').val('');
  $('#noofPRPpub').val('');

  var rpyear1=$('#RPyear').val();
    $.post('search/RPinfosearch.php',{rinput:rpyear1},function(data14){

       var dataRP1= JSON.parse(datarp);

        $('#noofRP').val(dataRP1[0].Research_Journal);
        $('#RPCom').val(dataRP1[0].Research_Project_Completed);
        $('#forRPpub').val(dataRP1[0].Published_Journal_Foreign);
        $('#locRPpub').val(dataRP1[0].Publish_Journal_Local);
        $('#noofPRPpub').val(dataRP1[0].Publish_Journal_Peer_review);


    });})
    $('#Fyear').keyup(function(){


      $('#Fincome').val('');
      $('#Ffincome').val('');
      $('#Fexpense').val('');
      $('#FExpenseEd').val('');
      $('#FExpRes').val('');
      $('#FExpSal').val('');
      $('#FExpSchol').val('');
      $('#FExpTrans').val('');
      $('#FExpElec').val('');
      $('#FExpInf').val('');
      $('#FExpMed').val('');
      $('#FExpMis').val('');


          var finyear1=$('#Fyear').val();
            $.post('search/Fininfosearch.php',{finput:finyear1},function(dataf){

               var fdata3= JSON.parse(dataf);

                $('#Fincome').val(fdata3[0].Admitted_Student);
                $('#Ffincome').val(fdata3[0].Female_Student);
                $('#Fexpense').val(fdata3[0].Total_Student_Studying);
                $('#FExpenseEd').val(fdata3[0].Total_Female_Student_Studying);
                $('#FExpRes').val(fdata3[0].Undergraduate_pass);
                $('#FExpSal').val(fdata3[0].Undergraduate_Hons);
                $('#FExpSchol').val(fdata3[0].Undergraduate_Passed_Student_Normal);
                $('#FExpTrans').val(fdata3[0].Undergraduate_Passed_Student_Hons);
                $('#FExpElec').val(fdata3[0].Undergraduate_Passed_Student_Eng_tech);
                $('#FExpInf').val(fdata3[0].Graduate_Passed_Student_Normal);
                $('#FExpMed').val(fdata3[0].Graduate_Passed_Student_Eng_tech);
                $('#FExpMis').val(fdata3[0].Student_Proverty);


            });

    })

    $('#Cyear').keyup(function(){



      $('#CArts').val('');
      $('#CSoc').val('');
      $('#CEdu').val('');
      $('#CSc').val('');
      $('#CBs').val('');
      $('#CLaw').val('');
      $('#CPharm').val('');
      $('#CAgri').val('');
      $('#CEng').val('');
      $('#CEco').val('');



          var cinyear1=$('#Cyear').val();
            $.post('search/Courseininfosearch.php',{cinput:cinyear1},function(datac){
            
               var cdata3= JSON.parse(datac);

                $('#CArts').val(cdata3[0].Arts);
                $('#CSoc').val(cdata3[0].Sociology);
                $('#CEdu').val(cdata3[0].Education);
                $('#CSc').val(cdata3[0].Science	);
                $('#CBs').val(cdata3[0].Business);
                $('#CLaw').val(cdata3[0].Law);
                $('#CPharm').val(cdata3[0].Pharmacy);
                $('#CAgri').val(cdata3[0].Agriculture);
                $('#CEng').val(cdata3[0].Engineering_and_Technical);
                $('#CEco').val(cdata3[0].Economics);


            });

    })

});
