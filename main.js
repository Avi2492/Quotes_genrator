// Variables
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
let btn = document.querySelector("#new-quote");

const quotes = [
  {
    quote:
      "हम को मालूम है जन्नत की हक़ीक़त लेकिन दिल के ख़ुश रखने को 'ग़ालिब' ये ख़याल अच्छा है ",
    person: "मिर्ज़ा ग़ालिब",
  },
  {
    quote: "इश्क़ ने 'ग़ालिब' निकम्मा कर दिया वर्ना हम भी आदमी थे काम के ",
    person: "मिर्ज़ा ग़ालिब",
  },
  {
    quote:
      "हम आह भी करते हैं तो हो जाते हैं बदनामवो क़त्ल भी करते हैं तो चर्चा नहीं होता ",
    person: "अकबर इलाहाबादी",
  },
  {
    quote:
      "ख़ुदी को कर बुलंद इतना कि हर तक़दीर से पहले ख़ुदा बंदे से ख़ुद पूछे बता तेरी रज़ा क्या है ",
    person: "अल्लामा इक़बाल",
  },
  {
    quote: "सितारों से आगे जहाँ और भी हैं अभी इश्क़ के इम्तिहाँ और भी हैं ",
    person: "अल्लामा इक़बाल",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
