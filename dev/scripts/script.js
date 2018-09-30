 $(document).ready(function (){

    // insults and date arrays

        const arrayOne = [
            { 
                insultOne: `you're lacking in intelligence`, 
                dateOne: 1934,
            },
            {
                insultOne: `you're a blatherskite`,
                dateOne: 1890,
            },
            {
                insultOne: `you're the Canadian Mussolini`,
                dateOne: 1964,
            },
            {
                insultOne: `you're insolent and impertinent`,
                dateOne: 1890,
            },
            {
                insultOne: `you're disgracing the House`,
                dateOne: 1896,
            },
            {
                insultOne: `you're talking twaddle`,
                dateOne: 1898,
            },
            {
                insultOne: `you're a dim-witted saboteur`,
                dateOne: 1956,
            },
            {
                insultOne: `you're deliberately trying to pervert this House`,
                dateOne: 1960,
            },
            { 
                insultOne:`you're a joker in this House`,
                dateOne: 1960,
            },
            {
                insultOne: `you're a sick animal`,
                dateOne: 1966,
            },
            {
                insultOne: `you're a trained seal`,
                dateOne: 1961
            },
            {
                insultOne: `you're insolent and impertinent`,
                dateOne: 1890
            },
            {
                insultOne: `you're devoid of honour`,
                dateOne: 1960
            },
            {
                insultOne: `you have a dictatorial attitude`,
                dateOne: 1961
            },
            {
                insultOne: `you're an ignoramus`,
                dateOne: 1961
            },
            {
                insultOne: `you're a fraudulent character`,
                dateOne: 1962
            },
            {
                insultOne: `you're a pompous ass`,
                dateOne: 1967
            },
            {
                insultOne: `you're stooping to pretty low motives`,
                dateOne: 1956
            },
            {
                insultOne: `you're an evil genius`,
                dateOne: 1962
            },
            {
                insultOne: `you're an hysterical trickster`,
                dateOne: `1943/1919`
            },
            {
                insultOne: `you're a fart in the room`,
                dateOne: 2016
            },
            {
                insultOne: `you're a fraud`,
                dateOne: 1960,
            },
            {
                insultOne: `you're an idiot`,
                dateOne: 1962,
            },
            {
                insultOne: `you're above the truth`,
                dateOne: 1962,
            },
            {
                insultOne: `you're misleading the public`,
                dateOne: 1960,
            },
            {
                insultOne: `you're not telling the complete truth`,
                dateOne: 1964,
            },
        ];

        const arrayTwo = [
            {
                insultTwo: `and a servile follower of the government`,
                dateTwo: 1878, 
            },
            {
                insultTwo: `and frankly grovelling in the dirt in order to get an office`,
                dateTwo: 1900,
            },
            {
                insultTwo: `a cowardly slanderer, and a bully`,
                dateTwo: 1907,
            },
            {
                insultTwo: `and a political sewer pipe from Carleton County`,
                dateTwo: 1917,
            },
            {
                insultTwo: `and a parliamentary babe and suckling`,
                dateTwo: 1890,
            },
            {
                insultTwo: `and scarcely entitled to be called gentlefolk`,
                dateTwo: 1876,
            },
            {
                insultTwo: `and you're small and cheap`,
                dateTwo: 1960,
            },
            {
                insultTwo: `and you do not have a spine`,
                dateTwo: 1971,
            },
            {
                insultTwo: `and you have a cheap political way`,
                dateTwo: 1960,
            },
            {
                insultTwo: `and you have deliberately misstated the truth`,
                dateTwo: 1960,
            },
            {
                insultTwo: `and you're inspired by forty-rod whisky`,
                dateTwo: 1881,
            },
            {
                insultTwo: `and honourable only by courtesy`,
                dateTwo: 1880,
            },
            {
                insultTwo: `and you're a parliamentary pugilist and political bully`,
                dateTwo: 1875,
            },
            {
                insultTwo: `and you have not got the guts`,
                dateTwo: 1959,
            },
            {
                insultTwo: `and you've come into the world by accident`,
                dateTwo: 1886,
            },
            {
                insultTwo: `and you're a bag of wind`,
                dateTwo: 1878,
            },
            {
                insultTwo: `and you're an underhanded crook`,
                dateTwo: `1961 / 1971`,
            },
            {
                insultTwo: `and seeking cheap notoriety`,
                dateTwo: 1919,
            },
            {
                insultTwo: `and I say 'fuddle duddle' to you`,
                dateTwo: 1971,
            },
            {
                insultTwo: `and an ass`,
                dateTwo: 1970,
            },
            {
                insultTwo: `and you're dishonest`,
                dateTwo: 1959,
            },
            {
                insultTwo: `and you're a Nazi`,
                dateTwo: 1962,
            },
            {
                insultTwo: `and you're full of reneged promises`,
                dateTwo: 1962,
            },
            {
                insultTwo: `and hypocritical`,
                dateTwo: 1961,
            },
            {
                insultTwo: `and are offensive`,
                dateTwo: 1964,
            },
        ];

    
        $('form').on('submit', function(event) {
            event.preventDefault();
            const userName = $('input').val().trim();
            if (userName) {
                insultGenerator(userName);
                $("section.first-screen").addClass("first-screen-off");
                // $("section.first-screen").addClass("second-screen");
                $(".form-second").show();
            } else {
                alert('Please put in your name to continue!');
            }
        });

        // end form as first interation


        // if statements for sentence generator
        const insultGenerator = function(userName) {

            // random number generator

            const randomIndexOne = Math.floor(Math.random() * arrayOne.length);
            const randomIndexTwo = Math.floor(Math.random() * arrayTwo.length);

            
            let insult = '';
            let dateOfInsult = '';

            if (randomIndexOne === 0 || randomIndexOne === 1 || randomIndexOne === 2 || randomIndexOne === 3 || randomIndexOne === 4 || randomIndexOne === 5) {
                insult = `Honourable Member ${userName}, ${arrayOne[randomIndexOne].insultOne}, ${arrayTwo[randomIndexTwo].insultTwo}.`

                dateOfInsult = `These insults were deemed unparliamentary in ${arrayOne[randomIndexOne].dateOne} and ${arrayTwo[randomIndexTwo].dateTwo}.`
            } else if (randomIndexOne === 6 || randomIndexOne === 7 || randomIndexOne === 8 || randomIndexOne === 9) {
                insult = `${arrayOne[randomIndexOne].insultOne}, ${userName}, ${arrayTwo[randomIndexTwo].insultTwo}.`

                dateOfInsult = `These insults were deemed unparliamentary in ${arrayOne[randomIndexOne].dateOne} and ${arrayTwo[randomIndexTwo].dateTwo}.`

            } else if (randomIndexOne === 10 || randomIndexOne === 11 || randomIndexOne === 12 || randomIndexOne === 13) {
                insult = `At the risk of sounding unparliamentary, Honourable Member ${userName}, ${arrayOne[randomIndexOne].insultOne} ${arrayTwo[randomIndexTwo].insultTwo}.`

                dateOfInsult = `These insults were deemed unparliamentary in ${arrayOne[randomIndexOne].dateOne} and ${arrayTwo[randomIndexTwo].dateTwo}.`
            } else if (randomIndexOne === 14 || randomIndexOne === 15 || randomIndexOne === 16 || randomIndexOne === 17) {
                insult = `Frankly, ${userName}, ${arrayOne[randomIndexOne].insultOne} ${arrayTwo[randomIndexTwo].insultTwo}.`

                dateOfInsult = `These insults were deemed unparliamentary in ${arrayOne[randomIndexOne].dateOne} and ${arrayTwo[randomIndexTwo].dateTwo}.`

            } else if (randomIndexOne === 18 || randomIndexOne === 19 || randomIndexOne === 20 || randomIndexOne === 26 ) {
                insult = `I ask the Leader of the Opposition, ${userName}, do you not realize that ${arrayOne[randomIndexOne].insultOne}?`

                dateOfInsult = `This insult were deemed unparliamentary in ${arrayOne[randomIndexOne].dateOne}.`

            } else if (randomIndexOne === 21 || randomIndexOne === 22 || randomIndexOne === 23 || randomIndexOne === 24 || randomIndexOne === 25) {
                insult = `I speak for my Party and my fellow Canadians when I say: ${userName}, ${arrayOne[randomIndexOne].insultOne}.`

                dateOfInsult = `This insult was deemed unparliamentary in ${arrayOne[randomIndexOne].dateOne}.`
            };
         // end if statements for gerenator

            const finalInsult = (`<p class="insult-style">${insult}</p>`);
            $('.insult-generated').html(finalInsult);

            const finalDateOfInsult = (`<p class="date-of-insult">${dateOfInsult}</p>`);
            $('.date-of-insult').html(finalDateOfInsult);

            $('.twitter-query').attr("data-description", insult);

            // pretty social plugin

            $('.prettySocial').prettySocial();
    
        };

    //   code that helps twitter in top right pop up

    $('.popup').click(function (event) { 
        var width = 575, height = 400, left = ($(window).width() - width) / 2, top = ($(window).height() - height) / 2, 
        url = $(this).attr('href'), opts = 'status=1' + ',width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
        window.open(url, 'twitter', opts); 
        return false; 
    }); 

    
    // reset button

     $('.again-button').on('click', function (event) {
         event.preventDefault();
         location.reload();
     });

    });