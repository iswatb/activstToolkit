/* .js files add interaction to your website */

var quoteList = ["Despite being commonly portrayed as a divisive clash between Islam and Judaism, the Israeli-Palestinian conflict is one rooted in competing nationalism and territorial claims.", "In 1948, after years of increasing tensions and a failed attempt to partition Palestine into two states by the UN, war broke out between Israel on one side and a coalition of Arab nations on the other.For Israelis this signified the beginning of their nation-state and the realisation of their long-held desire for a Jewish homeland. For Palestinians though, it was the beginning of the end, leaving many stateless. Around 700,000 Palestinians were displaced during the war, fleeing to neighbouring Arab countries.", "The fist Intifada, or rebellion, by Palestinians against Israeli forces wa in 1987. They threw stones abd boycotted Israeli institutions. The Israeli reaction was harsh. Curfews were enforced, Palestinian homes demolished, and water supplies limited. 1,962 Palestinians and 277 Israelis were killed during the troubles.", "Despite settling illegaly, and excluding East Jerusalem, over 400,000 Jewish settlers are living in West Bank settlements. In the homes of Palestinians.", "During the Second Intifada in 2002, the West Bank wall was built separating the Israeli and Palestinian territories. The fence has been described as a security measure by Israel, preventing the movement of arms, terrorists, and people into Israeli territory,however Palestinians view it more as a racial segregation or apartheid wall.Both Palestine and human rights organisations have also argued that the barriers violate human rights by restricting freedom of movement.", "Israel withdrew troops and settlers from Gaza in 2005 but imposed a blockade after the militant Hamas group seized power there two years later. Most Palestinians in east Jerusalem, thier home,are considered Israeli residents, but not citizens with voting rights."]; 
var quote = document.getElementById("quote");
var factGenerator = document.getElementById("factGenerator");
var count = 0;

factGenerator.addEventListener("click", displayQuote);

function displayQuote(){
  quote.innerHTML = quoteList[count];
  count++;
  if (count == quoteList.length){
    count = 0;
  }// end of if statement
}
