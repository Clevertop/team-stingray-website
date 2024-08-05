<!-- portal page -->

<template>
    <div class="landing-div">
        
        
        <img class="image-card" src="https://img.itch.zone/aW1nLzE2Mjg0ODg2LnBuZw==/original/ysnCCU.png"></img>

        
        <hr>
        <br></br>

        <a href="https://store.steampowered.com/app/2899410/Arcane_Raiders/">
            <div class="landing-card" >
                <h2 class="landing-subheading">Steam</h2>
                <p>Wishlist the game!</p>
            </div>
        </a>

        <br></br>

        <a href="https://cookiespl.itch.io/arcane-raiders">
            <div class="landing-card" >
                <h2 class="landing-subheading">Itch.io</h2>
                <p>Play the game now!</p>
            </div>
        </a>

        <br></br>

        <a href="https://discord.gg/3BPYMHqNve">
            <div class="landing-card" >
                <h2 class="landing-subheading">Discord</h2>
                <p>Chat with the devs and get exclusive updates!</p>
            </div>
        </a>
        
    </div>
</template>


<style>
   /*  Tech Fest Landing Page Styles */
   .landing-div{
    padding: 10%;
    align-items: center;
    text-align: center;
    margin-left: 15%;
    margin-right: 15%;
    
    }

    .landing-heading{
    font-size: 40px;
    font-weight: 600;
    }

    .landing-subheading{
    font-size: 30px;
    font-weight: 500;
    }

    .landing-card{
    background-color: rgb(132, 0, 184);

    padding: 10px;
    overflow: hidden;
    border-radius: 10px;
    transition: 0.3s;
    }

    .landing-card:hover { 
    background-color: rgb(200, 0, 207);
    }

    .image-card{
    overflow: hidden;
    border-radius: 10px;
    align-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    
    
    }

    p, h1, h2{
    color: white;
    font-family:Arial, Helvetica, sans-serif;
    text-decoration: none;
    }

    a:link{
        text-decoration: none;
    }

    a:visited{
        text-decoration: none;
    }

</style>