// Ahsoka 데이터 - ahsoka_data.js

// 캐릭터 데이터
const cData = [
    {
      idx: "c01",
      name: "Admiral Ackbar",
      desc: "A veteran commander, Ackbar led the defense of his homeworld, Mon Cala, during the Clone Wars and then masterminded the rebel attack on the second Death Star at the Battle of Endor. Ackbar realized the rebels had been drawn into a trap at Endor, but adjusted, with his fleet buying valuable time for the attack to succeed. After the Battle of Endor, Ackbar became a Grand Admiral in the New Republic, winning many victories including the pivotal Battle of Jakku. He retired to Mon Cala, but was coaxed back into service with the Resistance by Leia Organa.",
    },
    {
      idx: "c02",
      name: "Ahsoka Tano",
      desc: "Former Jedi Knight Ahsoka Tano once served as the Padawan learner to the Jedi Anakin Skywalker during the Clone Wars. A respected leader and warrior attuned to the light side of the Force, Ahsoka grew into a formidable fighter before the Empire’s reign changed the course of galactic history. Although she walked away from the Jedi Order, she continued to stand up for those fighting for peace and justice in the galaxy long after the fall of the Republic.",
    },
    {
      idx: "c03",
      name: "Anakin Skywalker",
      desc: "Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi, Anakin Skywalker had the potential to become one of the most powerful Jedi ever. Some even believed he was the prophesied Chosen One who would bring balance to the Force. Always pushing the limits of his Jedi training, seeking to excel and live up to his reputation, Skywalker's passion often brought him into conflict with his mentor, Jedi Master Obi-Wan Kenobi. A hero of the Clone Wars, Anakin was caring and compassionate, but suffered from a deep fear of loss that would prove to be his downfall.",
    },
    {
      idx: "c04",
      name: "Baylan Skoll",
      desc: "Baylan Skoll is lightsaber-wielding mercenary for hire overseeing his apprentice Shin Hati. But make no mistake: although there was a time when Skoll knew the acclaimed Jedi Knight Anakin Skywalker, Baylan is no Jedi. Now allied to Morgan Elsbeth, the former Magistrate of Calodan, after the fall of the Jedi and the Empire, Skoll remains a shrewd fighter in search of power who believes that another war is inevitable.",
    },
    {
      idx: "c05",
      name: "C-3PO (See-Threepio)",
      desc: "C-3PO longs for more peaceful times, but his continued service to the Resistance — and his knowledge of more than seven million forms of communication — keeps the worry-prone droid in the frontlines of galactic conflict. Programmed for etiquette and protocol, Threepio was built by a young Anakin Skywalker, and has been a constant companion to astromech R2-D2. Over the years, he was involved in some of the galaxy’s most defining moments and thrilling battles. Since the Empire’s defeat, C-3PO has served Leia Organa, head of a Resistance spy ring aimed at undermining the First Order.",
    },
    {
      idx: "c06",
      name: "C1-D1",
      desc: "In the Santhe Shipyards, C1-D1 catalogs inventory on arriving transports, except when HK assassin droids with high-level security clearances prevent it.",
    },
    {
      idx: "c07",
      name: "Captain Enoch",
      desc: "Grand Admiral Thrawn’s captain of the guard, Captain Enoch is an ominous sentinel. Enoch wears a modified helmet with a golden face hammered into his mask.",
    },
    {
      idx: "c08",
      name: "Captain Girard",
      desc: "A veteran of the Galactic Civil War that brought an end to the Imperial regime, Captain Girard now commands her own ship, the Dawnbringer, as part of the New Republic fleet. Overseeing a younger and relatively inexperienced crew, Girard has little patience for games that might fool a less-seasoned soldier.",
    },
    {
      idx: "c09",
      name: "Captain Hayle",
      desc: "A former member of the Rebel Alliance, Captain Hayle commands the Vesper in the peaceful era of the New Republic. A bold leader who does not shrink from conflict, Hayle faces any threat to his ship and his crew head-on with his top security officers."
      ,
    },
    {
      idx: "c10",
      name: "Captain Porter",
      desc: "A New Republic E-wing pilot, Captain Porter flies under the call sign Spectre Two-One, aiding Governor Ryder Azadi on the world of Lothal.",
    },
    {
      idx: "c11",
      name: "Carson Teva",
      desc: "Based out of an outpost on Adelphi, Carson Teva leads New Republic reconnaissance in stretches of the Outer Rim, including patrols over distant worlds like Tatooine in an effort to maintain order. He is one of the few who does not underestimate the lingering Imperial presence in the galactic hinterlands.",
    },
    {
      idx: "c12",
      name: "Chopper (C1-10P)",
      desc: "A beat-up, patched together astromech droid dating back to the Clone Wars, C1-10P — or Chopper —is a reliable droid who has served with Hera Syndulla for decades. Loyal to a fault, with a cranky personality to match his weathered finish, during the age of the Empire, Chopper served the Ghost crew in everything from ship maintenance to undercover missions and combat.",
    },
    {
      idx: "c13",
      name: "Clone Captain Rex",
      desc: "Rex once served the Republic on the frontlines during the Clone Wars, taking orders from Anakin Skywalker and Ahsoka Tano as first a captain and later a commander. He viewed military service as an honor, and his loyalty to the Republic and his Jedi Generals was absolute. But when Order 66 was executed, it was Ahsoka who helped to free Rex from the programming of his inhibitor chip. At the dawn of the Empire, Rex has escaped with his life but is considered killed-in-action in the eyes of the new regime. That allows him to operate in the shadows and help any clone brothers who remain separate from the Imperial ranks.",
    },
    {
      idx: "c14",
      name: "Ezra Bridger",
      desc: "One of the few to be trained as a Jedi after the fall of the Republic, Ezra Bridger grew up an orphan on the streets of Lothal during the age of the Empire. Although he had learned to be wary of strangers, his introduction to the Ghost crew, a small band of rebels fighting back against the Imperial regime, changed his outlook and his future. Training in the ways of the Force under the mentorship of Kanan Jarrus, Ezra became a Jedi Padawan and a part of the emerging rebellion. He also grew close to Hera Syndulla, Zeb, Chopper, and Sabine Wren, who was like a sister in his new found family. After several years together, Bridger vanished during the Battle of Lothal, disappearing into parts unknown in a hyperspace jump that pulled Ezra and Grand Admiral Thrawn into deep space.",
    },
    {
      idx: "c15",
      name: "First Officer Jensen Corbyt",
      desc: "Serving under Captain Hayle aboard the Vesper, in the peaceful era of the New Republic First Officer Jensen Corbyt commands the bridge when other matters call the captain away. Even in dire circumstances, Corbyt remains stoically at her post.",
    },
    {
      idx: "c16",
      name: "Grand Admiral Thrawn",
      desc: "The last unaccounted for Grand Admiral of the Imperial Navy, Thrawn is a brilliant strategist as ruthless as he is cunning. When the Empire needed a strong commander to dismantle the rebellion on Lothal, they called upon Thrawn, known for studying his enemies — including their art and culture — to gain tactical advantages often overlooked by his peers. Exiled into parts unknown with the Jedi and rebel Ezra Bridger during the Battle of Lothal, should he return to the galaxy, Thrawn has the potential to plunge the New Republic into war once again.",
    },
    {
      idx: "c17",
      name: "Hamato Xiono",
      desc: "A senator from Hosnian Prime, Hamato Xiono is among the New Republic's politicians serving on the Senate Defense Council. Hamato openly defies others using Republic resources to aid in personal matters. However, later in life he will use his standing to help his son, Kazuda Xiono.",
    },
    {
      idx: "c18",
      name: "Hera Syndulla",
      desc: "Once the heart of the Ghost crew during the age of the Empire, Hera Syndulla continues to serve as the captain of her ship while fighting for freedom from oppression as a general in the New Republic during an era of reconstruction. A gifted pilot with a knack for dogfighting with TIE fighters and a steadfast leader who was instrumental in leading the successful Lothal rebellion, Syndulla is now a mother, veteran, and general.",
    },
    {
      idx: "c19",
      name: "Jacen Syndulla",
      desc: "The son of Hera Syndulla and the late Jedi Knight Kanan Jarrus, Jacen is a blend of his exceptional parents.",
    },
    {
      idx: "c20",
      name: "Jai Kell",
      desc: "Once a standout cadet at the Imperial Academy, as a young man Jai Kell deserted the Empire and worked for the rebel faction on Lothal. In the years that followed, Kell remained loyal to Ezra Bridger, who helped him evade Imperial detection, returning the favor when Bridger and his friends were in trouble. And after the fall of the Empire, Kell serves as a senator representing his homeworld in the New Republic government.",
    },
    {
      idx: "c21",
      name: "Lieutenant Callahan",
      desc: "A New Republic E-wing pilot, Lieutenant Callahan and her droid KE4-N4 aid Governor Ryder Azadi on the world of Lothal.",
    },
    {
      idx: "c22",
      name: "Magistrate Morgan Elsbeth",
      desc: "The coldhearted former Magistrate of Calodan, Morgan Elsbeth is an ally of Grand Admiral Thrawn and an enemy of the New Republic. A formidable fighter with a mysterious past, Elsbeth once hunted Ahsoka Tano on the world of Corvus before she was bested in battle and arrested for acting as an Imperial sympathizer.",
    },
    {
      idx: "c23",
      name: "Marrok (Inquisitor)",
      desc: "Once an Inquisitor hunting Jedi for the Empire, the mysterious Marrok now works as a mercenary hired by Morgan Elsbeth to carry out dark deeds. Fully encased in battered battle armor, the warrior still carries a red double-bladed saber with a circular hilt.",
    },
    {
      idx: "c24",
      name: "Mon Mothma",
      desc: "From working in secret as one of the founders of the Rebel Alliance to openly leading the New Republic as the first elected Chancellor in two decades, Mon Mothma of Chandrila has built a career out of carefully navigating the dangerous shadows of Coruscant politics in her efforts to restore democracy. Once a leader of the Galactic Senate's Loyalist faction, as a senator Mon Mothma opposed Supreme Chancellor Palpatine's policies during the final days of the Republic. After the rise of the Empire, Mothma continued to serve her constituents on Coruscant while working on her ultimate goal: the Alliance to Restore the Republic.",
    },
    {
      idx: "c25",
      name: "Morai",
      desc: "A convor with a mysterious connection to the Daughter, an ancient god of Mortis, Morai has long followed and watched over Ahsoka Tano. In the world between worlds -- a mystical plain inside the Lothal Jedi Temple -- Morai encouraged the Padawan Ezra Bridger to save Ahsoka.",
    },
    {
      idx: "c26",
      name: "Murley",
      desc: "In the era of the New Republic, a Loth-cat named Murley spends time with Sabine Wren while she makes a home on the world of Lothal. A capable hunter with sharp teeth and claws, Murley is not a domesticated pet, but instead enjoys the comforts of staying in Sabine’s lookout tower for stretches of time. Wren keeps a container of special pellets to feed to Murley, who is known to spend lazy days getting pets from the Mandalorian and sleeping in the nooks among her belongings.",
    },
    {
      idx: "c27",
      name: "Myn Weaver",
      desc: "Regional Supervisor of the Santhe Shipyards, Myn Weaver once served the Empire. After the dawn of the New Republic, he claims fealty only to his investors and his own wealth, but freely admits there are those like him at every level of the post-Imperial government.",
    },
    {
      idx: "c28",
      name: "Professor Huyang",
      desc: "An ancient droid, but still quick of mind, Huyang oversaw the construction of lightsabers in the Jedi Order for centuries. After the fall of the Republic and the Jedi, his databanks remain a repository of ancient Jedi lore, including an exacting record of every lightsaber constructed under his supervision. A storied architect and professor, during the Clone Wars Huyang was based out of the training vessel Crucible, where he guided younglings in the art of saber construction as part of their journey to become Padawans. He continues to be operational after the end of the Jedi Order, surviving through the rise and fall of the Empire, to see the dawn of the New Republic.",
    },
    {
      idx: "c29",
      name: "Ryder Azadi",
      desc: "An active rebel during the age of the Empire, Ryder Azadi returns to his post as governor of Lothal after the New Republic comes to power. When the Empire came to his planet, he stood against Imperial tyranny with Ezra Bridger’s family, and was accused of treason for doing so. He was later freed from an Imperial prison by the Bridgers and returned to Lothal, living in the city outskirts.",
    },
    {
      idx: "c30",
      name: "Sabine Wren",
      desc: "Sabine Wren is a Mandalorian warrior and graffiti artist with a creative and rebellious spirit. Independent by nature, during the age of the Empire a young Sabine defected from the Imperial Academy of Mandalore and joined a small rebel cell operating out of the Ghost and led by Hera Syndulla and the Jedi Knight Kanan Jarrus. With a gift for colorful explosives and uniquely-painted beskar, Sabine’s signature starbird — a mark she left to sign her street art and other handiwork — inspired what would become the symbol for the Rebel Alliance.",
    },
];

// 에피소드 가이드 데이터

const epiData = [
  {
    idx: "ep01",
    title: "Part One: Master and Apprentice | Episode Guide | Ahsoka",
    desc: "A valuable prisoner escapes New Republic custody; a search for answers reunites two old friends.",
  },
  {
    idx: "ep02",
    title: "Part Two: Toil and Trouble | Episode Guide | Ahsoka",
    desc: "Ahsoka and General Hera Syndulla travel to New Republic shipyards and make an unexpected discovery.",
  },
  {
    idx: "ep03",
    title: "Part Three: Time to Fly | Episode Guide | Ahsoka",
    desc: "Hera tangles with New Republic politics while Ahsoka and Sabine Wren voyage to a distant planet.",
  },
  {
    idx: "ep04",
    title: "Part Four: Fallen Jedi | Episode Guide | Ahsoka",
    desc: "Hera risks her career to help her friends while Ahsoka and Sabine confront enemies.",
  },
  {
    idx: "ep05",
    title: "Part Five: Shadow Warrior | Episode Guide | Ahsoka",
    desc: "Ahsoka confronts her past, while Hera and her allies undertake a rescue mission.",
  },
  {
    idx: "ep06",
    title: "Part Six: Far, Far Away | Episode Guide | Ahsoka",
    desc: "The search for Grand Admiral Thrawn reaches beyond the limits of the galaxy.",
  },
]

export { cData, epiData };