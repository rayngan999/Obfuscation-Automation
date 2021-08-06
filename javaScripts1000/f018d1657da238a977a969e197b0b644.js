
$(document).ready
(
	function()
	{
		$(".toggleDiv").click
		(
			function()
			{
				var divid = "#" + $(this).attr("div");
				if($(divid).css("display") == "none")
				{
					$(divid).show();
				}
				else
				{
					$(divid).hide();
				}
			}
		);

		$(".toggle").click
                (
                        function()
                        {
                                var elem = $(this).attr("toggle");
                                if($(elem).css("display") == "none")
                                {
                                        $(elem).show();
                                }
                                else
                                {
                                        $(elem).hide();
                                }
                        }
                );
		

		$(".showSalaries").click
		(
			function() 
			{ 	
				$(".salary").css("display","block");
				$(".caphit").css("display","none");
			} 
		);

		$(".showCapHit").click
                (
                        function()
                        {
				$(".salary").css("display","none");
				$(".caphit").css("display","block");
                        }
                );


		$(".dock_small").mouseover
                (
                        function()
                        {
                                var team = $(this).attr("id");
                                var teamleft = $(this).attr("teamleft");
                                var teamright = $(this).attr("teamright");

                                $(this).addClass("dock_large").addClass(team+"_large").removeClass("dock_small").removeClass(team+"_small");
                                $("#"+teamleft).addClass("dock_medium").addClass(teamleft+"_medium").removeClass("dock_small").removeClass(teamleft+"_small");
                                $("#"+teamright).addClass("dock_medium").addClass(teamright+"_medium").removeClass("dock_small").removeClass(teamright+"_small");
                        }
                );

                $(".dock_small").mouseout
                (
                        function()
                        {
                                var team = $(this).attr("id");
                                var teamleft = $(this).attr("teamleft");
                                var teamright = $(this).attr("teamright");

                                $(this).addClass("dock_small").addClass(team+"_small").removeClass("dock_large").removeClass(team+"_large");
                                $("#"+teamleft).addClass("dock_small").addClass(teamleft+"_small").removeClass("dock_medium").removeClass(teamleft+"_medium");
                                $("#"+teamright).addClass("dock_small").addClass(teamright+"_small").removeClass("dock_medium").removeClass(teamright+"_medium");
                        }
                );


		$(".marqueeThumb").click
		(
			function() 
			{ 
				var selected = $(this).attr("count");
				var image_container;


				$(".image_container").hide();
				$(".image_container"+selected).fadeIn('def');
	
				$(".marqueeThumb").removeClass("currentThumb");	
				$(this).addClass("currentThumb");	
			} 
		);


        $(window).scroll(function() 
        {

            var scroll_distance = $(this).scrollTop();
            var window_height = $( window ).height();
            

            if(window_height >= 900)
            {
                $( ".sticky" ).each( function( index, element )
                {
                    var element_distance = $(this).offset().top
                    if(scroll_distance > element_distance)
                    {
                        if($(this).hasClass('stuck') == false)
                        {
                            $(this).addClass('stuck');
                        }
                    }
                    else
                    {
                        if($(this).hasClass('stuck') == true)
                        {
                            $(this).removeClass('stuck');
                        }
                    }
                });
            }
            else if(window_height > 600)
            {
                $( ".sticky2" ).each( function( index, element )
                {
                    var element_distance = $(this).offset().top
                    if(scroll_distance > element_distance)
                    {
                        if($(this).hasClass('stuck') == false)
                        {
                            $(this).addClass('stuck');
                        }
                    }
                    else
                    {
                        if($(this).hasClass('stuck') == true)
                        {
                            $(this).removeClass('stuck');
                        }
                    }
                });

            }





            
        });


	}


);

function GA_googleAddSlots(val1, val2)
{
}

