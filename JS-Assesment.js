// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

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

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for(var i = 0; i < nftset.length; i++) {
        console.log("\n" + "Name: " + nftset[i].name); 
        console.log("Creator: " + nftset[i].creator);
        console.log("Creation Year: " + nftset[i].mintYear); 
	}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal supply is: " + nftset.length); 
}

// call your functions below this line
mintNFT("Punk 1", "Sid", 2022);
mintNFT("Punk 2", "King", 2023);
mintNFT("Punk 3", "Champ", 2024);

listNFTs();
getTotalSupply()