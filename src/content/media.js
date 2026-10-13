// Articles, interviews and videos elsewhere that feature the campaign. Newest first.
// The section stays hidden until items or posts has at least one entry.
//
// items: links to coverage, shown as cards
//   type     "Article", "Video", "Podcast", "Interview": shown as a label
//   outlet   who published it
//   title    the headline as published
//   date     ISO date, e.g. "2026-10-01"
//   url      link to the original
//   note     optional, one sentence on what it covers
//
// posts: Facebook posts embedded below the cards. Newest first.
//   url      the post's address, from "..." > Embed on Facebook, the part after href=
//            (paste it decoded, e.g. https://www.facebook.com/PaulForPerth/posts/pfbid...)
//   height   optional, pixels; Facebook does not resize the frame, so raise this if a
//            long post is cut off (default 680)
export const media = {
  heading: "In the media",
  intro: "Articles, interviews and videos from elsewhere, in case you would rather hear it from someone other than me.",
  items: [{
  type: "Article",
  outlet: "Inside Ottawa Valley",
  title: "What are election candidates’ top priorities for Rideau Lakes, Perth and Smiths Falls?",
  date: "2026-09-01",
  url: "https://www.insideottawavalley.com/news/municipal-elections/candidates-priorities-for-rideau-lakes-perth-smiths-falls/article_ff81ae5e-5627-536f-9bb4-5cdf456ba854.html#:~:text=Paul%20Quinnell%3A%20%E2%80%9C-,Homes,-people%20already%20living",
},{
  type: "Interview",
  outlet: "Lanark Leeds Today",
  title: "Perth council candidate Quinnell puts affordability at centre of campaign",
  date: "2026-09-30",
  url: "https://lanarkleedstoday.ca/2026/09/30/perth-council-candidate-quinnel-puts-affordability-at-centre-of-campaign/",
},{
  type: "Article",
  outlet: "Hometown News",
  title: "Hometown News Election Centre - Perth",
  date: "2026-09-15",
  url: "https://hometownnews.ca/election2026/perth/#:~:text=COUNCILLOR%20CANDIDATE-,Paul,-Quinnell",
},{
  type: "Debate",
  outlet: "YourTV Brockville-Smiths Falls",
  title: "YourTV yourVOTE Brings Perth Councillor Candidates Night",
  date: "2026-10-11",
  url: "https://youtu.be/_e88B_a4LKk",
},{
  type: "Interview",
  outlet: "Lanarkist",
  title: "Five questions with Paul Quinnell, candidate for Perth council in the 2026 municipal election",
  date: "2026-09-07",
  url: "https://lanarkist.com/2026/09/07/five-questions-with-paul-quinnell-candidate-for-perth-council-in-the-2026-municipal-election/",
},],
  posts: [
    {
      url: "https://www.facebook.com/PaulForPerth/posts/pfbid02G23ABjGCrPvRSYAK3MduhtDPvAbTpyGUTJFqEg3xrL8REj1FDUwaRLsc13kDzYJBl",
    },
    {
      url: "https://www.facebook.com/PaulForPerth/posts/pfbid07TMN6TGTu1NfZZLKgci8yUVDMLv5r3937ozCyu37HdHX1v1PPSMzQS5rsDnZutBtl",
    },
    {
      url: "https://www.facebook.com/PaulForPerth/posts/pfbid0LnEQCjXVyKMTXTpSKSqDzpK9BtDsBpqEv4qrvE1JJrLnoRtFZpfbVvD2GgS5dYsGl",
    },
  ],
};
