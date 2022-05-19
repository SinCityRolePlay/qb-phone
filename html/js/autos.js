SetupAutos = function(data) {
    $(".autos-list").html("");
    var luxauto = [];
    var basspro = [];
    var sanders = [];
    var hektic = [];
    var redline =[];
    var bennys = [];
    var sic = [];

    if (data.length > 0) {

        $.each(data, function(i, auto) {
            if (auto.typejob == "luxauto") {
                luxauto.push(auto);
            }
            if (auto.typejob == "basspro") {
                basspro.push(auto);
            }
            if (auto.typejob == "sanders") {
                sanders.push(auto);
            }
            if (auto.typejob == "hektic") {
                hektic.push(auto);
            }
            if (auto.typejob == "redline") {
                redline.push(auto);
            }
            if (auto.typejob == "bennys") {
                bennys.push(auto);
            }
            if (auto.typejob == "sic") {
                sic.push(auto);
            }
        });

        $(".autos-list").append('<h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; border-top-left-radius: .5vh; border-top-right-radius: .5vh; width:100%; display:block; background-color: rgb(128, 209, 127);">Luxury Auto (' + luxauto.length + ')</h1>');

        if (luxauto.length > 0) {
            $.each(luxauto, function(i, auto) {
                var element = '<div class="auto-list" id="autoid-' + i + '"> <div class="auto-list-firstletter" style="background-color: rgb(128, 209, 127);">' + (auto.name).charAt(0).toUpperCase() + '</div> <div class="auto-list-fullname">' + auto.name + '</div> <div class="auto-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".autos-list").append(element);
                $("#autoid-" + i).data('AutoData', auto);
            });
        } else {
            var element = '<div class="auto-list"><div class="no-autos">Luxury Auto is closed.</div></div>'
            $(".autos-list").append(element);
        }

        // basspro banner and online employee list.
        $(".autos-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(35, 92, 58);">Bass Pro Auto (' + basspro.length + ')</h1>');

        if (basspro.length > 0) {
            $.each(basspro, function(i, auto1) {
                var element = '<div class="auto-list" id="autoid1-' + i + '"> <div class="auto-list-firstletter" style="background-color: rgb(35, 92, 58);">' + (auto1.name).charAt(0).toUpperCase() + '</div> <div class="auto-list-fullname">' + auto1.name + '</div> <div class="auto-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".autos-list").append(element);
                $("#autoid1-" + i).data('AutoData', auto1);
            });
        } else {
            var element = '<div class="auto-list"><div class="no-autos">Bass Pro Auto is closed.</div></div>'
            $(".autos-list").append(element);
        }

        // sanders banner and online employee list.
        $(".autos-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(0, 102, 255);">Sanders Motorcycles (' + sanders.length + ')</h1>');

        if (sanders.length > 0) {
            $.each(sanders, function(i, auto2) {
                var element = '<div class="auto-list" id="autoid2-' + i + '"> <div class="auto-list-firstletter" style="background-color: rgb(0, 102, 255);">' + (auto2.name).charAt(0).toUpperCase() + '</div> <div class="auto-list-fullname">' + auto2.name + '</div> <div class="auto-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".autos-list").append(element);
                $("#autoid2-" + i).data('AutoData', auto2);
            });
        } else {
            var element = '<div class="auto-list"><div class="no-autos">Sanders Motorcycles is closed.</div></div>'
            $(".autos-list").append(element);
        }

        // hektic banner and online employee list.
        $(".autos-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(121, 35, 203);">Hektic Customs (' + hektic.length + ')</h1>');

        if (hektic.length > 0) {
            $.each(hektic, function(i, auto3) {
                var element = '<div class="auto-list" id="autoid3-' + i + '"> <div class="auto-list-firstletter" style="background-color: rgb(121, 35, 203);">' + (auto3.name).charAt(0).toUpperCase() + '</div> <div class="auto-list-fullname">' + auto3.name + '</div> <div class="auto-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".autos-list").append(element);
                $("#autoid3-" + i).data('AutoData', auto3);
            });
        } else {
            var element = '<div class="auto-list"><div class="no-autos">Hektic Customs is closed.</div></div>'
            $(".autos-list").append(element);
        }

        // Bean Machine banner and online employee list.
        $(".autos-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(186, 0, 0);">Redline (' + redline.length + ')</h1>');

        if (redline.length > 0) {
            $.each(redline, function(i, auto4) {
                var element = '<div class="auto-list" id="autoid4-' + i + '"> <div class="auto-list-firstletter" style="background-color: rgb(186, 0, 0);">' + (auto4.name).charAt(0).toUpperCase() + '</div> <div class="auto-list-fullname">' + auto4.name + '</div> <div class="auto-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".autos-list").append(element);
                $("#autoid4-" + i).data('AutoData', auto4);
            });
        } else {
            var element = '<div class="auto-list"><div class="no-autos">Redline is closed.</div></div>'
            $(".autos-list").append(element);
        }
        
        // bennys banner and online employee list.
        $(".autos-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(11, 58, 102);">Bennys Motorworks (' + bennys.length + ')</h1>');

        if (bennys.length > 0) {
            $.each(bennys, function(i, auto5) {
                var element = '<div class="auto-list" id="autoid5-' + i + '"> <div class="auto-list-firstletter" style="background-color: rgb(11, 58, 102);">' + (auto5.name).charAt(0).toUpperCase() + '</div> <div class="auto-list-fullname">' + auto5.name + '</div> <div class="auto-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".autos-list").append(element);
                $("#autoid5-" + i).data('AutoData', auto5);
            });
        } else {
            var element = '<div class="auto-list"><div class="no-autos">Bennys Motorworks is closed.</div></div>'
            $(".autos-list").append(element);
        }
        
        // sic banner and online employee list.
        $(".autos-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255, 94, 192);">SinCity Imports (' + sic.length + ')</h1>');

        if (sic.length > 0) {
            $.each(sic, function(i, auto6) {
                var element = '<div class="auto-list" id="autoid6-' + i + '"> <div class="auto-list-firstletter" style="background-color: rgb(255, 94, 192);">' + (auto6.name).charAt(0).toUpperCase() + '</div> <div class="auto-list-fullname">' + auto6.name + '</div> <div class="auto-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".autos-list").append(element);
                $("#autoid6-" + i).data('AutoData', auto6);
            });
        } else {
            var element = '<div class="auto-list"><div class="no-autos">SinCityRP Imports is closed.</div></div>'
            $(".autos-list").append(element);
        }


    } else {
        $(".autos-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; border-top-left-radius: .5vh; border-top-right-radius: .5vh; width:100%; display:block; background-color: rgb(128, 209, 127);">Luxury Auto (' + luxauto.length + ')</h1>');

        var element = '<div class="auto-list"><div class="no-autos">Luxury Auto is closed.</div></div>'
        $(".autos-list").append(element);

        $(".autos-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(35, 92, 58);">Bass Pro Auto (' + basspro.length + ')</h1>');

        var element = '<div class="auto-list"><div class="no-autos">Bass Pro Auto is closed.</div></div>'
        $(".autos-list").append(element);

        $(".autos-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(0, 102, 255);">Sanders Motorcycles (' + sanders.length + ')</h1>');

        var element = '<div class="auto-list"><div class="no-autos">Sanders Motorcycles is closed.</div></div>'
        $(".autos-list").append(element);

        $(".autos-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(121, 35, 203);">Hektic Customs (' + hektic.length + ')</h1>');

        var element = '<div class="auto-list"><div class="no-autos">Hektic Customs is closed.</div></div>'
        $(".autos-list").append(element);

        $(".autos-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(186, 0, 0);">Redline (' + redline.length + ')</h1>');

        var element = '<div class="auto-list"><div class="no-autos">Redline is closed.</div></div>'
        $(".autos-list").append(element);
        
        $(".autos-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(11, 58, 102);">Bennys Motorworks (' + bennys.length + ')</h1>');

        var element = '<div class="auto-list"><div class="no-autos">Bennys Motorworks is closed.</div></div>'
        $(".autos-list").append(element);
        
        $(".autos-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255, 94, 192);">SinCity Imports (' + sic.length + ')</h1>');

        var element = '<div class="auto-list"><div class="no-autos">SinCity Imports is closed.</div></div>'
        $(".autos-list").append(element);
    }
}

$(document).on('click', '.auto-list-call', function(e){
    e.preventDefault();

    var AutoData = $(this).parent().data('AutoData');
    
    var cData = {
        number: AutoData.phone,
        name: AutoData.name
    }

    $.post('https://qb-phone/CallContact', JSON.stringify({
        ContactData: cData,
        Anonymous: QB.Phone.Data.AnonymousCall,
    }), function(status){
        if (cData.number !== QB.Phone.Data.PlayerData.charinfo.phone) {
            if (status.IsOnline) {
                if (status.CanCall) {
                    if (!status.InCall) {
                        if (QB.Phone.Data.AnonymousCall) {
                            QB.Phone.Notifications.Add("fas fa-phone", "Phone", "You started a anonymous call!");
                        }
                        $(".phone-call-outgoing").css({"display":"block"});
                        $(".phone-call-incoming").css({"display":"none"});
                        $(".phone-call-ongoing").css({"display":"none"});
                        $(".phone-call-outgoing-caller").html(cData.name);
                        QB.Phone.Functions.HeaderTextColor("white", 400);
                        QB.Phone.Animations.TopSlideUp('.phone-application-container', 400, -160);
                        setTimeout(function(){
                            $(".autos-app").css({"display":"none"});
                            QB.Phone.Animations.TopSlideDown('.phone-application-container', 400, 0);
                            QB.Phone.Functions.ToggleApp("phone-call", "block");
                        }, 450);
    
                        CallData.name = cData.name;
                        CallData.number = cData.number;
                    
                        QB.Phone.Data.currentApplication = "phone-call";
                    } else {
                        QB.Phone.Notifications.Add("fas fa-phone", "Phone", "You are already connected to a call!");
                    }
                } else {
                    QB.Phone.Notifications.Add("fas fa-phone", "Phone", "This person is already in a call");
                }
            } else {
                QB.Phone.Notifications.Add("fas fa-phone", "Phone", "This person is not available!");
            }
        } else {
            QB.Phone.Notifications.Add("fas fa-phone", "Phone", "You can't call your own number!");
        }
    });
});
