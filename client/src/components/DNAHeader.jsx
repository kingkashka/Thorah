import DNACard from "../cards/DNACard";
import DNACardData from "../componentData/DNACardData";
import { FaPlus } from "react-icons/fa";
import "/src/css/DNA.css";
function DNAHeader() {
  const renderDNACard = DNACardData.map((data) => (
    <DNACard image={data.image} title={data.title} info={data.info} />
  ));
  return (
    <div className="DNAHeader">
      <h1>DNA</h1>
      <h3>The Flood - המבול</h3>
      <p>
        During the time of Noach, YHWH (יהוה) destroyed all life on Earth,
        eradicating all existing lineages. However, Noach found grace in the
        eyes of Elohim and was instructed to build an ark (תבה) to preserve
        life. This ark protected Noach, his wife, his three sons, their wives,
        seven pairs of all clean animals, and pairs of all unclean animals. This
        was necessary due to the extermination that occurred on Earth. The flood
        did not affect just one region but destroyed life across the entire
        Earth. In restarting civilization and repopulating the land, Elohim
        allowed the nations of the world today to descend directly from Noach
        and his three sons. This narrative underscores the belief that the seed
        of Israel, the set-apart seed, can be traced back to a single lineage.
        Understanding these lineages and their origins through DNA can help
        recognize the descent and heritage of the people of Israel. This is
        supported by the Thorah in Numbers 1:18, which states, "and all the
        congregation assembled on the first of the second month, and they were
        registered according to their families by the house of their fathers, by
        the number of names from age twenty years and above."
      </p>
      <div className="DNACard--Container">
        <div className="DNA--Card">
          <img src="https://media.istockphoto.com/id/640026258/vector/xy-chromosomes-as-a-concept-for-human-biology-medical-symbol.jpg?s=612x612&w=0&k=20&c=yKzyK7LqppMPWg5yhpA8ERg7X707Is1cWY__SeELWZM=" alt="" />
          <h3>X Chromosome</h3>
          <p></p>
        </div>
        <FaPlus className="plusSign"/>
        <div className="DNA--Card">
          <img src="https://www.nih.gov/sites/default/files/news-events/research-matters/2023/20230711-y.jpg" alt="" />
          <h3>Y Chromosome</h3>
          <p></p>
        </div>
      </div>
      <h1>DNA</h1>
      <p>
        DNA is the molecular basis for genetic inheritance, while Y haplogroups
        represent specific lineages within the Y chromosome's genetic makeup.
        The study of Y haplogroups involves analyzing the DNA sequence of the Y
        chromosome to identify markers that define different paternal lineages.
        This analysis can reveal historical and ancestral connections, helping
        researchers understand human evolution and migration.
      </p>
      <h3>Y Chromosome</h3>
      <p>
        Humans have 23 pairs of chromosomes, one of which determines sex. Males
        have one X and one Y chromosome, while females have two X chromosomes.
        The Y chromosome is unique to males and carries genes responsible for
        male sex determination and sperm production.
      </p>
      <h3>Y Haplogroup</h3>
      <p>
        A haplogroup is a group of similar haplotypes that share a common
        ancestor with a single-nucleotide polymorphism (SNP) mutation. Y
        haplogroups are specifically defined by variations in the Y chromosome.
      </p>
      <ul>
        <li>
          Inheritance: Y haplogroups are passed from father to son and remain
          relatively unchanged through generations, making them useful for
          tracing paternal lineage.
        </li>
        <li>
          Genetic Markers: The classification of Y haplogroups is based on
          specific genetic markers (SNPs) on the Y chromosome.
        </li>
        <li>
          Population Genetics: Y haplogroups can provide insights into human
          migration patterns, ancient populations, and evolutionary history.
        </li>
        <li>
          Phylogenetic Tree: Y haplogroups are organized in a tree structure,
          showing how different groups are related and diverged from common
          ancestors over time.
        </li>
      </ul>
    </div>
  );
}
export default DNAHeader;
