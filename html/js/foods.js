SetupFoods = function(data) {
    $(".foods-list").html("");
    var burgershot = [];
    var yellowjack = [];
    var beanmachine =[];
    var cookies = [];
    var tequilala = [];
    var vu = [];
    var cyberbar =[];
    var noodleexchange =[];


    if (data.length > 0) {

        $.each(data, function(i, food) {
            if (food.typejob == "burgershot") {
                burgershot.push(food);
            }
            if (food.typejob == "yellowjack") {
                yellowjack.push(food);
            }
            if (food.typejob == "beanmachine") {
                beanmachine.push(food);
            }
            if (food.typejob == "cookies") {
                cookies.push(food);
            }
            if (food.typejob == "tequilala") {
                tequilala.push(food);
            }
            if (food.typejob == "vu") {
                vu.push(food);
            }
            if (food.typejob == "cyberbar") {
                cyberbar.push(food);
            }
            if (food.typejob == "noodleexchange") {
                noodleexchange.push(food);
            }
        });

        $(".foods-list").append('<h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; border-top-left-radius: .5vh; border-top-right-radius: .5vh; width:100%; display:block; background-color: rgb(42, 137, 214);">Burgershot (' + burgershot.length + ')</h1>');

        if (burgershot.length > 0) {
            $.each(burgershot, function(i, food) {
                var element = '<div class="food-list" id="foodid-' + i + '"> <div class="food-list-firstletter" style="background-color: rgb(42, 137, 214);">' + (food.name).charAt(0).toUpperCase() + '</div> <div class="food-list-fullname">' + food.name + '</div> <div class="food-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".foods-list").append(element);
                $("#foodid-" + i).data('FoodData', food);
            });
        } else {
            var element = '<div class="food-list"><div class="no-foods">Burgershot is closed.</div></div>'
            $(".foods-list").append(element);
        }

        // yellowjack banner and online employee list.
        $(".foods-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255, 190, 27);">YellowJack (' + yellowjack.length + ')</h1>');

        if (yellowjack.length > 0) {
            $.each(yellowjack, function(i, food1) {
                var element = '<div class="food-list" id="foodid1-' + i + '"> <div class="food-list-firstletter" style="background-color: rgb(255, 190, 27);">' + (food1.name).charAt(0).toUpperCase() + '</div> <div class="food-list-fullname">' + food1.name + '</div> <div class="food-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".foods-list").append(element);
                $("#foodid1-" + i).data('FoodData', food1);
            });
        } else {
            var element = '<div class="food-list"><div class="no-foods">YellowJacks is closed.</div></div>'
            $(".foods-list").append(element);
        }

        // Bean Machine banner and online employee list.
        $(".foods-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255, 100, 0);">Bean Machine (' + beanmachine.length + ')</h1>');

        if (beanmachine.length > 0) {
            $.each(beanmachine, function(i, food2) {
                var element = '<div class="food-list" id="foodid2-' + i + '"> <div class="food-list-firstletter" style="background-color: rgb(255, 100, 0);">' + (food2.name).charAt(0).toUpperCase() + '</div> <div class="food-list-fullname">' + food2.name + '</div> <div class="food-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".foods-list").append(element);
                $("#foodid2-" + i).data('FoodData', food2);
            });
        } else {
            var element = '<div class="food-list"><div class="no-foods">Bean Machine is closed.</div></div>'
            $(".foods-list").append(element);
        }
        
        // cookies banner and online employee list.
        $(".foods-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(0, 102, 255);">Cookies (' + cookies.length + ')</h1>');

        if (cookies.length > 0) {
            $.each(cookies, function(i, food3) {
                var element = '<div class="food-list" id="foodid3-' + i + '"> <div class="food-list-firstletter" style="background-color: rgb(0, 102, 255);">' + (food3.name).charAt(0).toUpperCase() + '</div> <div class="food-list-fullname">' + food3.name + '</div> <div class="food-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".foods-list").append(element);
                $("#foodid3-" + i).data('FoodData', food3);
            });
        } else {
            var element = '<div class="food-list"><div class="no-foods">Cookies is closed.</div></div>'
            $(".foods-list").append(element);
        }
        
        // Tequilala banner and online employee list.
        $(".foods-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255, 0, 0);">Tequilala (' + tequilala.length + ')</h1>');

        if (tequilala.length > 0) {
            $.each(tequilala, function(i, food4) {
                var element = '<div class="food-list" id="foodid4-' + i + '"> <div class="food-list-firstletter" style="background-color: rgb(255, 0, 0);">' + (food4.name).charAt(0).toUpperCase() + '</div> <div class="food-list-fullname">' + food4.name + '</div> <div class="food-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".foods-list").append(element);
                $("#foodid4-" + i).data('FoodData', food4);
            });
        } else {
            var element = '<div class="food-list"><div class="no-foods">Tequilala is closed.</div></div>'
            $(".foods-list").append(element);
        }

        // Vanilla Unicorn banner and online employee list.
        $(".foods-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(139, 69, 19);">Vanilla Unicorn (' + vu.length + ')</h1>');

        if (vu.length > 0) {
            $.each(vu, function(i, food5) {
                var element = '<div class="food-list" id="foodid5-' + i + '"> <div class="food-list-firstletter" style="background-color: rgb(139, 69, 19);">' + (food5.name).charAt(0).toUpperCase() + '</div> <div class="food-list-fullname">' + food5.name + '</div> <div class="food-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".foods-list").append(element);
                $("#foodid5-" + i).data('FoodData', food5);
            });
        } else {
            var element = '<div class="food-list"><div class="no-foods">Vanilla Unicorn is closed.</div></div>'
            $(".foods-list").append(element);
        }

        // Cyber Bar banner and online employee list.
        $(".foods-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(102, 0, 204);">Cyber Bar (' + cyberbar.length + ')</h1>');

        if (cyberbar.length > 0) {
            $.each(cyberbar, function(i, food6) {
                var element = '<div class="food-list" id="foodid6-' + i + '"> <div class="food-list-firstletter" style="background-color: rgb(102, 0, 204);">' + (food6.name).charAt(0).toUpperCase() + '</div> <div class="food-list-fullname">' + food6.name + '</div> <div class="food-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".foods-list").append(element);
                $("#foodid6-" + i).data('FoodData', food6);
            });
        } else {
            var element = '<div class="food-list"><div class="no-foods">Cyber Bar is closed.</div></div>'
            $(".foods-list").append(element);
        }

        // Noodle Exchange banner and online employee list.
        $(".foods-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(174, 52, 52);">Noodle Exchange (' + noodleexchange.length + ')</h1>');

        if (noodleexchange.length > 0) {
            $.each(noodleexchange, function(i, food7) {
                var element = '<div class="food-list" id="foodid7-' + i + '"> <div class="food-list-firstletter" style="background-color: rgb(174, 52, 52);">' + (food7.name).charAt(0).toUpperCase() + '</div> <div class="food-list-fullname">' + food7.name + '</div> <div class="food-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".foods-list").append(element);
                $("#foodid7-" + i).data('FoodData', food7);
            });
        } else {
            var element = '<div class="food-list"><div class="no-foods">Noodle Exchange is closed.</div></div>'
            $(".foods-list").append(element);
        }

    } else {
        $(".foods-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; border-top-left-radius: .5vh; border-top-right-radius: .5vh; width:100%; display:block; background-color: rgb(42, 137, 214);">Burgershot (' + burgershot.length + ')</h1>');

        var element = '<div class="food-list"><div class="no-foods">Burgershot is closed.</div></div>'
        $(".foods-list").append(element);

        $(".foods-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255, 190, 27);">YellowJack (' + yellowjack.length + ')</h1>');

        var element = '<div class="food-list"><div class="no-foods">YellowJack is closed.</div></div>'
        $(".foods-list").append(element);

        $(".foods-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255, 100, 0);">Bean Machine (' + beanmachine.length + ')</h1>');

        var element = '<div class="food-list"><div class="no-foods">Bean Machine is closed.</div></div>'
        $(".foods-list").append(element);
        
        $(".foods-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(0, 102, 255);">Cookies (' + cookies.length + ')</h1>');

        var element = '<div class="food-list"><div class="no-foods">Cookies is closed.</div></div>'
        $(".foods-list").append(element);
        
        $(".foods-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255, 0, 0);">Tequilala (' + tequilala.length + ')</h1>');

        var element = '<div class="food-list"><div class="no-foods">Tequilala is closed.</div></div>'
        $(".foods-list").append(element);

        $(".foods-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(139, 69, 19);">Vanilla Unicorn (' + vu.length + ')</h1>');

        var element = '<div class="food-list"><div class="no-foods">Vanilla Unicorn is closed.</div></div>'
        $(".foods-list").append(element);

        $(".foods-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(102, 0, 204);">Cyber Bar (' + cyberbar.length + ')</h1>');

        var element = '<div class="food-list"><div class="no-foods">Cyber Bar is closed.</div></div>'
        $(".foods-list").append(element);

        $(".foods-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(174, 52, 52);">Noodle Exchange (' + noodleexchange.length + ')</h1>');

        var element = '<div class="food-list"><div class="no-foods">Noodle Exchange is closed.</div></div>'
        $(".foods-list").append(element);
    }
}

$(document).on('click', '.food-list-call', function(e){
    e.preventDefault();

    var FoodData = $(this).parent().data('FoodData');
    
    var cData = {
        number: FoodData.phone,
        name: FoodData.name
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
                            $(".foods-app").css({"display":"none"});
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
