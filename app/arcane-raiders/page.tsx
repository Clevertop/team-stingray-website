


export default async function ArcaneRaiders() {
    // server code
    return (
        <div className="landing-div">
            {/* <h1 className="landing-heading">Arcane Raiders</h1> */}
            
            <img className="image-card" src="https://img.itch.zone/aW1nLzE2Mjg0ODg2LnBuZw==/original/ysnCCU.png"></img>

            <br></br>

            <a href="https://store.steampowered.com/app/2899410/Arcane_Raiders/">
                <div className="landing-card" >
                    <h2 className="landing-subheading">Steam</h2>
                    <p>Wishlist the game!</p>
                </div>
            </a>

            <br></br>

            <a href="https://cookiespl.itch.io/arcane-raiders">
                <div className="landing-card" >
                    <h2 className="landing-subheading">Itch.io</h2>
                    <p>Play the game now!</p>
                </div>
            </a>

            <br></br>

            <a href="https://discord.gg/3BPYMHqNve">
                <div className="landing-card" >
                    <h2 className="landing-subheading">Discord</h2>
                    <p>Chat with the devs and get exclusive updates!</p>
                </div>
            </a>
            
        </div>
    )
}