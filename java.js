$(document).ready(function(){
$("#submit-next").click(function(event){
    event.preventDefault();
    var Cname = $("#fullname").val().trim();
    var job = $("#job").val().trim();
    var phone = $("#phone").val().trim();
    var cnic = $("#cnic").val().trim();
    var DOB = $("#dob").val().trim();
    var email = $("#email").val().trim();
    var postal_address = $("#postal-address").val().trim();
    var permanent_address = $("#permanent-address").val().trim();
    var city = $("#city").val().trim();
    var state = $("#state").val().trim();
    var country = $("#country").val().trim();
    var experience = $("#text-area").val().trim();
    var degree = $("degree").val();
    var c_job = $("#current").val().trim();

    if(Cname || job || phone || cnic || DOB || email || postal_address || permanent_address || city || state || country || experience || degree || c_job){
        var userData = {
            Sudent_name: Cname,
            job_title: job,
            Phone_number: phone,
            CNIC: cnic,
            Date_of_birth: DOB,
            Email: email,
            postal: postal_address,
            permanent: permanent_address,
            city: city,
            state: state,
            country: country,
            text_area: experience,
            user_deg: degree,
            current: c_job
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        // alert("Your personal information is saved, Now move to Next step.");
        window.location.href = 'education.html';
        console.log(userData);
        }else{
            alert("Please fill all the fields.");
            }
});
$("#submit-back").click(function(event){
    event.preventDefault();
    window.history.back();
}); 
$("#ai").click(function(){
    $("#text-area").text("Graphic Designer, Alberts Trucking Company Phoenix April 2011 – August 2019Performed vehicle inspections and maintenance prior to trips.Read maps and identified the fastest routes. Loaded and unloaded vehicles carefully. Provided excellent customer service to clients resulting in repeat clients. Driver, Bears Transportation, Phoenix September 2009 – March 2011 Reached 70K accident-free miles. Handled both goods and passengers. Worked to achieve ultimate customer satisfaction.");
    return false;
});

$("#submit-next-edu").click(function(event){
    event.preventDefault();
    var userinfo_1 = JSON.parse(localStorage.getItem('userData'));
    var qualification = $("#qualification").val().trim();
    var institution = $("#board").val().trim();
    var rollno = $("#rollNo").val().trim();
    var annual = $("#examType").val().trim();
    var year = $("#examYear").val().trim();
    //intermediate
    var qualification_inter = $("#qualification-inter").val().trim();
    var institution_inter = $("#board-inter").val().trim();
    var rollno_inter = $("#rollNo-inter").val().trim();
    var annual_inter = $("#examType-inter").val().trim();
    var year_inter = $("#examYear-inter").val().trim();
    //becholer's
    var qualification_bech = $("#qualification-bech").val().trim();
    var institution_bech = $("#board-bech").val().trim();
    var rollno_bech = $("#rollNo-bech").val().trim();
    var annual_bech = $("#examType-bech").val().trim();
    var year_bech = $("#examYear-bech").val().trim();
    //master's
    var qualification_ms = $("#qualification-ms").val().trim();
    var institution_ms = $("#board-ms").val().trim();
    var rollno_ms = $("#rollNo-ms").val().trim();
    var annual_ms = $("#examType-ms").val().trim();
    var year_ms = $("#examYear-ms").val().trim();

    if(qualification || qualification_inter || qualification_bech || qualification_ms){
        var userEducation = {
            qualification: qualification,
            institution: institution,
            rollno: rollno,
            annual: annual,
            year: year,
            //intermediate
            qualification_inter: qualification_inter,
            institution_inter: institution_inter,
            rollno_inter: rollno_inter,
            annual_inter: annual_inter,
            year_inter: year_inter,
            //becholer's
            qualification_bech: qualification_bech,
            institution_bech: institution_bech,
            rollno_bech: rollno_bech,
            annual_bech: annual_bech,
            year_bech: year_bech,
            //master's
            qualification_ms: qualification_ms,
            institution_ms: institution_ms,
            rollno_ms: rollno_ms,
            annual_ms: annual_ms,
            year_ms: year_ms
        }
        localStorage.setItem("userEducation", JSON.stringify(userEducation));
        // alert("Your Education information is saved, Now move to Next step.");
        window.location.href = 'submit.html';
        console.log(userEducation, userinfo_1);
    }else{
        alert("Please fill all the fields.");
    }
});
$("#submit-back-edu").click(function(){
    window.history.back();
});

$("#upload").change(function(){
if(this.files && this.files[0]){
    var reader = new FileReader();
    reader.onload = function (e) {
        $("#view-img").attr('src', e.target.result);
        $("#view-img").css({
            "width": "40px",
            "height": "40px",
            "margin-top": "10px"
        });
        $("#symbol").html("<span class='status-incomplete text-success'>✓</span>")
        $("#com").text("Complete")
    }
    reader.readAsDataURL(this.files[0]);
    console.log(reader.result);
}else(
    alert("file are not properly upload.")
)
});
$("#upload2").change(function(){
if(this.files && this.files[0]){
    var reader = new FileReader();
    reader.onload = function (e) {
        $("#view-img2").attr('src', e.target.result);
        $("#view-img2").css({
            "width": "40px",
            "height": "40px",
            "margin-top": "10px"
        });
        $("#symbol2").html("<span class='status-incomplete text-success'>✓</span>")
        $("#com2").text("Complete")
    }
    reader.readAsDataURL(this.files[0]);
    console.log(reader.result);
}else(
    alert("file are not properly upload.")
)
});
$("#upload3").change(function(){
if(this.files && this.files[0]){
    var reader = new FileReader();
    reader.onload = function (e) {
        $("#view-img3").attr('src', e.target.result);
        $("#view-img3").css({
            "width": "40px",
            "height": "40px",
            "margin-top": "10px"
        });
        $("#symbol3").html("<span class='status-incomplete text-success'>✓</span>")
        $("#com3").text("Complete")
    }
    reader.readAsDataURL(this.files[0]);
    console.log(reader.result);
}else(
    alert("file are not properly upload.")
)
});
$("#upload4").change(function(){
if(this.files && this.files[0]){
    var reader = new FileReader();
    reader.onload = function (e) {
        $("#view-img4").attr('src', e.target.result);
        $("#view-img4").css({
            "width": "40px",
            "height": "40px",
            "margin-top": "10px"
        });
        $("#symbol4").html("<span class='status-incomplete text-success'>✓</span>")
        $("#com4").text("Complete")
    }
    reader.readAsDataURL(this.files[0]);
    console.log(reader.result);
}else(
    alert("file are not properly upload.")
)
});
$("#upload5").change(function(){
if(this.files && this.files[0]){
    var reader = new FileReader();
    reader.onload = function (e) {
        $("#view-img5").attr('src', e.target.result);
        $("#view-img5").css({
            "width": "40px",
            "height": "40px",
            "margin-top": "10px"
        });
        $("#symbol5").html("<span class='status-incomplete text-success'>✓</span>")
        $("#com5").text("Complete")
    }
    reader.readAsDataURL(this.files[0]);
    console.log(reader.result);
}else(
    alert("file are not properly upload.")
)
});
$("#upload6").change(function(){
if(this.files && this.files[0]){
    var reader = new FileReader();
    reader.onload = function (e) {
        $("#view-img6").attr('src', e.target.result);
        $("#view-img6").css({
            "width": "40px",
            "height": "40px",
            "margin-top": "10px"
        });
        $("#symbol6").html("<span class='status-incomplete text-success'>✓</span>")
        $("#com6").text("Complete")
    }
    reader.readAsDataURL(this.files[0]);
    console.log(reader.result);
}else(
    alert("file are not properly upload.")
)
});

$("#submit-next-sub").click(function(event){
    event.preventDefault();
    var userinfo_2 = JSON.parse(localStorage.getItem('userData'));
    var user_edu_1 = JSON.parse(localStorage.getItem('userEducation'));
    var upload_1 = $("#upload").val().trim();
    var upload_2 = $("#upload2").val().trim();
    var upload_3 = $("#upload3").val().trim();
    var upload_4 = $("#upload4").val().trim();
    var upload_5 = $("#upload5").val().trim();
    var upload_6 = $("#upload6").val().trim();
    
    if(upload_1 || upload_2 || upload_3 || upload_4 || upload_5 ||upload_6){
        var userDoc = {
            upload_save1: upload_1,
            upload_save2: upload_2,
            upload_save3: upload_3,
            upload_save4: upload_4,
            upload_save5: upload_5,
            upload_save6: upload_6,
        }
        localStorage.setItem("userDoc", JSON.stringify(userDoc));
        // alert("Your Document are uploaded, Now move to Generate.");
        window.location.href = "Generate.html";
        console.log(userDoc, userinfo_2, user_edu_1);
        return false;
    }else{
        alert("Please fill the the fields.")
    }
})
$("#submit-back-sub").click(function(){
    window.history.back();
});
$("#show-more").click(function(){
    if($("#temp").hasClass("d-none")){
        $("#temp").removeClass("d-none");
        $("#show-more").text("Show less")
        return false;
    }else{
        $("#temp").addClass("d-none");
        return false;
    }
});
$("#submit-back-gen").click(function(){
    window.history.back();
});
$("#GenerateResume").click(function(){
    $(".modal-box").css("transform", "scale(1)");
})
$("#visit").click(function(){
    var userinfo_3 = JSON.parse(localStorage.getItem('userData'));
    var user_edu_2 = JSON.parse(localStorage.getItem('userEducation'));
    var user_doc_1 = JSON.parse(localStorage.getItem('userDoc'));
    // alert("function is start");
    console.log(userinfo_3, user_edu_2, user_doc_1);
    console.log(userinfo_3.Sudent_name);
    // window.location.href = "resume.html"
    var s_name = $("h1").text(userinfo_3.Sudent_name);
    var title = $("#title").text(userinfo_3.job_title);
    var telphone = $("#contact").html("<strong style='margin-right: 170px;'>Contact: </strong>" + userinfo_3.Phone_number);
    var idcard = $("#cnic").html("<strong style='margin-right: 140px;'>User CNIC: </strong>" + userinfo_3.CNIC);
    var birth = $("#dob").html("<strong style='margin-right: 127px;'>Date of Birth: </strong>" + userinfo_3.Date_of_birth);
    var p_add = $("#postal").html("<strong style='margin-right: 110px;'>Postal Address: </strong>" + userinfo_3.postal);
    var provence = $("#state").html("<strong style='margin-right: 190px;'>State: </strong>" +     userinfo_3.state);
    var employ = $("#employ").text(userinfo_3.text_area);
    var dgr = $("#degree").html("<strong style='margin-right: 170px;'>Degree: </strong>" + userinfo_3.user_deg);
    var count = $("#country").html("<strong style='margin-right: 160px;'>Country: </strong>" + userinfo_3.country);
    var job_t = $("#jname").html("<strong style='margin-right: 150px;'>Experties: </strong>" + userinfo_3.job_title);
    var f_name = $("#name").html("<strong style='margin-right: 150px;'>Full Name: </strong>" + userinfo_3.Sudent_name);
    var user_email = $("#email").html("<strong style='margin-right: 178px;'>Email: </strong>" + userinfo_3.Email);
    var P_add = $("#permanent").html("<strong style='margin-right: 65px;'>Permanent Address: </strong>" + userinfo_3.permanent);
    var job_c = $("#job").html("<strong style='margin-right: 127px;'>Current Job: </strong>" + userinfo_3.current);
    var g_matric = $("#matric-d").html(user_edu_2.qualification + "<strong> " + user_edu_2.institution + "</strong>");
    var d_matric = $("#matric-date").html("April " + user_edu_2.year);
    var q_inter = $("#inter-d").html(user_edu_2.qualification_inter + "<strong> " + user_edu_2.institution_inter + "</strong>");
    var d_inter = $("#inter-date").html("August " + user_edu_2.year_inter);
    var q_bech = $("#bech-d").html(user_edu_2.qualification_bech + "<strong> " + user_edu_2.institution_bech + "</strong>");
    var d_bech = $("#bech-date").html("November " + user_edu_2.year_bech);
    $("#upload").change(function(){
        if(this.files && this.files[0]){
            var reader = new FileReader();
            reader.onload = function (e) {
                $("#top-img").attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
            console.log(reader.result);
        }else(
            alert("file are not properly upload.")
        )
        });
        $(".modal-box").css("display", "none");
        return false;
});
$("#cancel").click(function(){
    $(".modal-box").css("transform", "scale(0)");
});
$("#downloadResume").click(function(){
    $("#resume").printThis({
        base: "https://abdulsamad2522.github.io/abdulsamad-profile/",
        inportCSS: true,
        importStyle: true,    
        loadCSS: "style.css" 
    });
})


});
