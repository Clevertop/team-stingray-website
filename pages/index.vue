<script setup lang="ts">

useSeoMeta({
  title: "Team Stingray",
  ogTitle: "Team Stingray",
  description: "Indie group of game devs from Sydney, Australia :3",
  ogDescription: "Indie group of game devs from Sydney, Australia :3.",
});
</script>

<template>
    
    <img class="logo" src="/img/verticalWhite.png">
    
    <hr>
    
    <h2>Hey there!</h2>
    <p class="temp-space">We're an indie group of game developers from Sydney, Australia!</p>
    
    <div class="container">
        <BoldButton 
            href="https://twitter.com/TeamStingrayDev"
            text="Twitter"
        />
        <BoldButton 
            href="https://discord.gg/3BPYMHqNve"
            text="Discord Server"
        />
        <BoldButton 
            href="mailto:devs@teamstingray.dev"
            text="Email"
        />
    </div>
    <!-- shortcut link to contact? -->

    <hr>

    <h2>The Team</h2>
    <div class="member-container">
        <MemberCard 
            href="https://www.linkedin.com/in/lauren-szmandiuk-00b018257/"
            name="Lauren Szmandiuk"
            description="description goes here"
            image="https://media.licdn.com/dms/image/v2/D4D03AQGyN-a5u4sIYA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728024699904?e=1733961600&v=beta&t=L1M6z1DuHd0DTHawatXkrdshcqb_0TgxBH7TWDx5VdM"
        />
        <MemberCard 
            href="https://tabbycat.dev"
            name="Tom Howarth"
            description="I also go by Tabby! I specialise in online features and multiplayer games, click to view my website at tabbycat.dev!"
            image="https://media.licdn.com/dms/image/v2/D5603AQE5PIcr6fjD-A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720395760594?e=1732752000&v=beta&t=TI17VVKSFqJE_Hf6xhjyOuLMks-Z0b6SPQlX-iMPPaE"
        />
        <MemberCard 
            href="https://www.linkedin.com/in/ethan-lucas/"
            name="Ethan Lucas"
            description="description goes here"
            image="https://media.licdn.com/dms/image/v2/D5603AQHXZ1L6sl_H7w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685689887007?e=1732752000&v=beta&t=Cbm2hZZz_HFgM8koLsBWxxzRHqQoXuVn_n31KfTaMQo"
        />
        <MemberCard 
            href="https://www.linkedin.com/in/xander-akkari/"
            name="Xander Akkari"
            description="description goes here"
            image="https://media.licdn.com/dms/image/v2/D4D03AQGT6Lw6Zb-wjA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719309048010?e=1732752000&v=beta&t=G1oIoxE95zNWs1vzrMjP3OF4I8rntVHDphmQeTq0zN0"
        />
        <MemberCard 
            href="https://www.linkedin.com/in/alex-valacos-326490256/"
            name="Alex Valacos"
            description="description goes here"
            image="https://cdn.discordapp.com/avatars/323694221020233728/8cdc0e0d8db628636b9f919b1dcbffa0?size=1024"
        />
    </div>
    <!-- flexbox of team member cards -->

    <hr>

    <h2>Our Projects</h2>
    <div class="container">
      <ProjectCard 
        src="https://img.itch.zone/aW1nLzE2Mjg0ODg2LnBuZw==/315x250%23c/6FRKz0.png" 
        href="https://teamstingray.dev/arcane-raiders"
        heading="Arcane Raiders"
        description="Fight to the top of the tower with up to 4 players and an arsenal of powerful spells! We'll be showcasing it at SXSW Sydeny and its already avilable to wishlist on Steam!"
      />

      <ProjectCard 
        src="https://img.itch.zone/aW1nLzE3NzI0MzM2LmpwZw==/315x250%23c/OuyEVu.jpg" 
        href="https://clevertop.itch.io/modline-drift"
        heading="Modline Drift"
        description="Work in progress racing game where you upgrade your car while you race!"
      />

      <ProjectCard 
        src="https://img.itch.zone/aW1nLzE0NjYyOTAwLnBuZw==/315x250%23c/UaC28P.png" 
        href="https://clevertop.itch.io/smoothie-maker-pro"
        heading="Smoothie Maker Pro"
        description="Make the world's greatest smoothies in this arcade puzzle game!"
      />

      <ProjectCard 
        src="https://img.itch.zone/aW1nLzE1NDA4ODI2LnBuZw==/315x250%23c/TrI9Z5.png" 
        href="https://ethan-lucas.itch.io/super-boxing"
        heading="Super Boxing"
        description="Prove you're the champion of NEW BOX CITY!"
      />

      <ProjectCard 
        src="https://img.itch.zone/aW1nLzE0Nzg2Njc0LnBuZw==/315x250%23c/dKTgWr.png" 
        href="https://ethan-lucas.itch.io/nothing-shady-at-this-bbq"
        heading="Nothing Shady at THIS BBQ!"
        description="Absolutely nothing at all!"
      />

      <ProjectCard 
        src="https://img.itch.zone/aW1nLzEyNjA2MDI1LnBuZw==/315x250%23c/vaNWSF.png" 
        href="https://ethan-lucas.itch.io/starship-scramble"
        heading="Starship Scramble"
        description="Fuel is expensive, Don't run out. - Featured at SXSW Sydney 2023!"
      />

      <ProjectCard 
        src="https://img.itch.zone/aW1nLzE0MzYzNDI5LnBuZw==/315x250%23c/GU0g%2Bt.png" 
        href="https://gekkosaurus.itch.io/tank-blitz"
        heading="Tank Blitz"
        description="Upgrade your tank as you travel to reach the end of the level"
      />
    </div>
    <!-- <BoldButton 
        href="/projects"
        text="View All"
    /> -->


    <!-- featured projects - what were currently working on / proud of / recently finished -->
    <!-- link to projects page -->
<!-- 
    <hr>

    <h2>Contact Us!</h2> -->
    <!-- twitter, discord and email buttons/cards -->
     

    <!-- <ul><a href="/arcane-raiders">Landing Page for Arcane Raiders</a></ul>
    <ul><a href="/arcane">Short URL to Steam page</a></ul> -->

</template>

<style>
    .temp-space{
        padding-bottom: 10px;
    }

    .container{
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
    }

    .member-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        /* align-items: center; */
    }

    /* @media (max-width: 1000px){
        .container{
            flex-direction: column;
        }
    } */

    .logo {
        max-width: 35%;
        align-self: center;
        
    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        margin-top: 1cm;
    }


    a{
        font-weight: 800;
    }

    /* a:link{
        color:cyan
    }

    a:visited{
        color:magenta
    }

    a:active{
        color:violet
    } */


</style>