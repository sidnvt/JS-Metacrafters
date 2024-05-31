const nftset = []; 

function mintNFT(name, creator, mint_year) {
    const nft = {
        "name": name, 
        "creator": creator,
        "mintYear": mint_year 
};
    nftset.push(nft); 
    console.log("Minted " + name)
}


function listNFTs() {
    for(var i = 0; i < nftset.length; i++) {
        console.log("\n" + "Name: " + nftset[i].name); 
        console.log("Creator: " + nftset[i].creator);
        console.log("Creation Year: " + nftset[i].mintYear); 
	}
}

function getTotalSupply() {
    console.log("\nTotal supply is: " + nftset.length); 
}

mintNFT("Punk 1", "Sid", 2022);
mintNFT("Punk 2", "King", 2023);
mintNFT("Punk 3", "Champ", 2024);

listNFTs();

getTotalSupply()