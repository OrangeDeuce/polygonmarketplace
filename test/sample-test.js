/*
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
*/

/* test/sample-test.js */
describe("NFTMarket", function() {
  it("Should create and execute market sales", async function() {
    /* deploy the marketplace */
    const PolygonMarketplace = await ethers.getContractFactory("PolygonMarketplace")
    const polygonMarketplace = await PolygonMarketplace.deploy()
    await polygonMarketplace.deployed()

    let listingPrice = await polygonMarketplace.getListingPrice()
    listingPrice = listingPrice.toString()

    const auctionPrice = ethers.utils.parseUnits('1', 'ether')

    /* create two tokens */
    await polygonMarketplace.createToken("https://www.mytokenlocation.com", auctionPrice, { value: listingPrice })
    await polygonMarketplace.createToken("https://www.mytokenlocation2.com", auctionPrice, { value: listingPrice })

    const [_, buyerAddress] = await ethers.getSigners()

    /* execute sale of token to another user */
    await polygonMarketplace.connect(buyerAddress).createMarketSale(1, { value: auctionPrice })

    /* resell a token */
    await polygonMarketplace.connect(buyerAddress).resellToken(1, auctionPrice, { value: listingPrice })

    /* query for and return the unsold items */
    items = await polygonMarketplace.fetchMarketItems()
    items = await Promise.all(items.map(async i => {
      const tokenUri = await polygonMarketplace.tokenURI(i.tokenId)
      let item = {
        price: i.price.toString(),
        tokenId: i.tokenId.toString(),
        seller: i.seller,
        owner: i.owner,
        tokenUri
      }
      return item
    }))
    console.log('items: ', items)
  })
})
