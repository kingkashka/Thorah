import DNACard from "../cards/DNACard";
import DNACardData from "../componentData/DNACardData";
import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "/src/components/themeContext.jsx";
import "/src/css/DNA.css";
import { color } from "d3";
function DNAHeader() {
  const context = useContext(ThemeContext);
  const renderDNACard = DNACardData.map((data) => (
    <DNACard image={data.image} title={data.title} info={data.info} />
  ));
  return (
    <div className={`DNAHeader--${context.color}`}>
      <h1>The Holy Seed - זרע הקודש</h1>
      <h3>The Flood - המבול</h3>
      <img
        className="theFlood"
        src="/images/DNA images/ai-generated-8452637_1280.webp"
        alt="https://cdn.pixabay.com/photo/2023/12/16/14/56/ai-generated-8452637_1280.png"
      />

      <p>
        During the time of Noach, YHWH - יהוה destroyed all life on Earth,
        eradicating all existing lineages. However, Noach found grace in the
        eyes of Elohim and was instructed to build an ark ("תבה") to preserve
        life. This ark protected Noach, his wife, his three sons, their wives,
        seven pairs of all clean animals, and pairs of all unclean animals. This
        was necessary due to the extermination that occurred on Earth. The flood
        did not affect just one region but destroyed life across the entire
        Earth. In restarting civilization and repopulating the land, Elohim
        allowed the nations of the world today to descend directly from Noach
        and his three sons. This narrative underscores the belief that, like all
        nations today, the set-apart seed of Israel can be traced back to a
        single lineage. Understanding these lineages and their origins through
        DNA can help recognize the descent and heritage of the people of Israel.
        This is supported by the Thorah in Numbers 1:18, which states, "and all
        the congregation assembled on the first of the second month, and they
        established their genealogy according to their families by the house of
        their fathers, by the number of names from age twenty years and above."
        This is an important detail because it highlights the recounting of
        households by the fathers. Contrary to modern Judaism, which believes
        that the seedline is determined by the mother's lineage, this concept
        has no foundation in Thorah. The latter directly correlates with
        scientific findings regarding the Y haplogroup, which is passed down
        through the paternal line—exclusively from father to son. Hence the
        phrase "like father, like son." This unbroken chain through generations
        serves as a crucial tool provided by YHWH - יהוה , allowing us to trace
        our lineage and determine the nation from which our forefathers descend
        from. Today, our focus is on deducing the biblical family tree lineage,
        particularly the lineage of Israel as outlined in the Thorah, and
        understanding how it corresponds to contemporary haplogroups.
      </p>
      <div className="DNACard--Container">
        <div className="containerOne">
          <h3>Inherting DNA</h3>
        <img src="https://i2.wp.com/nebula.org/blog/wp-content/uploads/2020/04/Screen-Shot-2020-04-01-at-3.18.16-PM-1024x607.png" alt="" />
        </div>
        <div className="DNA--Card">
          <h2>Mitochondrial DNA</h2>
          <img
            className="chromosome"
            src="https://www.meresearch.org.uk/wp-content/uploads/2021/06/Mitochondria-1500x800.jpg"
            alt=""
          />
          <div className="chromosomeFacts">
            <ul>
              <li>
                Inheritance: mtDNA is inherited exclusively from the mother,
                with each individual receiving a copy from their mother, who
                received it from her own mother, continuing along an unbroken
                maternal line.
              </li>
              <li>
                Genetic Markers: Small mutations or "typos" occasionally occur
                in the mtDNA sequence, creating new genetic variants. Over
                generations, these variants accumulate, forming unique patterns
                that identify different maternal lines.
              </li>
              <li>
                Population Genetics: The unique patterns of genetic variants in
                mtDNA allow researchers to trace maternal lineages and study the
                evolutionary history and migration patterns of populations
                across the world.
              </li>
            </ul>
          </div>
        </div>
        <FaPlus className="plusSign" />
        <div className="DNA--Card">
          <h2>Y Chromosome</h2>
          <img
            className="chromosome"
            src="https://www.nih.gov/sites/default/files/news-events/research-matters/2023/20230711-y.jpg"
            alt=""
          />
          <div className="chromosomeFacts">
            <ul>
              <li>
                Inheritance: Y haplogroups are passed from father to son and
                remain relatively unchanged through generations, making them
                useful for tracing paternal lineage.
              </li>
              <li>
                Genetic Markers: The classification of Y haplogroups is based on
                mutations called single nucleotide polymorphisms (SNPs) on the Y
                chromosome.
              </li>
              <li>
                Population Genetics: Y haplogroups can provide insights into
                human migration patterns, ancient populations, and human genetic
                development.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="DNABase">
        {/* <p>
          In the human genome, there are 22 pairs of autosomes, numbered 1
          through 22. Autosomes are present in both males and females and hold
          the bulk of an individual's genetic material, including genes
          responsible for most physical and biochemical traits. Additionally,
          there is one pair of sex chromosomes, consisting of the X and Y
          chromosomes, which determine an individual's sex and influence certain
          other characteristics. Together, these 46 chromosomes collectively
          carry the genetic information essential for the growth, development,
          functioning, and reproduction of the human body.
        </p> */}
        <h1>The Family Tree - עץ המשפחה</h1>
      </div>
    </div>
  );
}
export default DNAHeader;
