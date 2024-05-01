import { useContext } from "react";
import { ThemeContext } from "./themeContext";
function LanguageHeader() {
  const context = useContext(ThemeContext);
  return (
    <div className={`language--header--${context.color}`}>
      <h1>The Hebrew Language - השפת העברי</h1>
      <p>
        The Hebrew language holds a unique and sacred status. It stands as the
        only language known to have been spoken directly between YHWH and the
        prophets. Elohim, the sole creator of all existence, including every
        known language in history, imbues Hebrew with unparalleled significance.
        Just as Elohim is set apart in all His being and actions, so too is the
        Hebrew language. As His people, we are destined to be set apart like
        Him, and one of the foundational steps in this journey is gaining an
        understanding of this sacred language.
      </p>
      <h3>Yiddish & Ladino</h3>
      <p>
        There's a misconception that modern Hebrew is merely a blend of Yiddish
        and Ladino, but this is not accurate. Hebrew, once lost in time
        according to the curses outlined in the Torah, has seen a miraculous
        resurgence. Despite being scattered among the nations and diminished in
        number, we were blessed with the opportunity to rediscover and preserve
        our language and heritage. In the late 19th and early 20th centuries,
        Hebrew experienced a remarkable revival, culminating in the
        establishment of Modern Hebrew as the official language of Israel. This
        revival allowed us to reclaim our linguistic roots and identity. Ladino
        is a Romance language that evolved from medieval Spanish, enriched with
        influences from Hebrew, Arabic, Turkish, and other languages. It emerged
        among Sephardic Jewish converts who were expelled from Spain in 1492 and
        subsequently settled in various regions, notably the Ottoman Empire.
        Yiddish, on the other hand, is a High German language with influences
        from Hebrew and Slavic tongues. It originated during the medieval era
        and flourished as a distinct language spoken by Ashkenazi Jewish
        converts primarily in Eastern Europe. Over time, it became a vital
        aspect of Jewish communities in Central and Eastern Europe, and later,
        in other parts of the world.
      </p>
      <h3>Our Understanding</h3>
      <p>
        Modern Hebrew is written from right to left using a script that consists
        of 22 letters, all consonants. Vowels are represented using diacritic
        marks called "nikkud" or are implied by context.
        <br />
        Hebrew in anitiquity was written without "nikkud" vowel points in a
        system refered to as "matris lectionis". "Matres lectionis" is a Latin
        term that translates to "mothers of reading" or "mothers of
        pronunciation." In the context of the Hebrew language, it refers to
        certain consonant letters that were used to indicate vowel sounds if not
        positioned as the first letter of a word. These letters are the "aleph",
        "waw", "yod".
      </p>
      <div className={`hebrew--list--${context.color}`}>
        <li>
          א (Aleph): Originally representing a glottal stop sound (/ʔ/), similar
          to the sound between the syllables of the English word "uh-oh". the
          letter Aleph also represents a vowel place holder when followed by
          either of the other vowels /a/ /o/ or /e/ in various positions within
          words. For example, in the word אור (or), meaning "light," the Aleph
          represents the vowel placeholder helping the waw create the "oh"
          sound. If the aleph was not present then this sound could not be
          achievable with the waw in the first letter position.
        </li>
        <li>
          ו (Waw): While primarily a consonant representing the /w/ sound, the
          letter Waw can also represent the vowel sounds /o/ or /u/. In
          antiquity, the vowel is primarily an "Ō" sound, as in the word "coat."
          Over time, with the natural evolution of this vowel, we have the "U"
          sound, as in the word "noob." This evolution occurs naturally within
          speech and can cause the listener to perceive a shift from the natural
          "Ō" vowel. For instance, in the word "לרוץ" (la'rotz) meaning "to
          run," the Waw, represents the vowel /o/, but with natural evolution,
          this vowel may sound like the /u/ vowel.
        </li>
        <li>
          י (Yod): Besides functioning as a consonant representing the /y/
          sound, the letter Yod can indicate the vowel sounds /i/ or /e/. In
          words like בֵית (beith), meaning "house," the Yod represents the vowel
          /e/.
        </li>
      </div>
      <p>
        The use of matres lectionis became less standardized over time,
        particularly during the development of the Masoretic text, which added
        vowel diacritics (nikkud) to Hebrew script. However, even in modern
        Hebrew, matres lectionis are still employed to some extent, though they
        are not always explicitly marked. This understanding helps us better
        understand the true pronunciation of biblical areas, places, names and
        most importantly the most holiest name in our history YHWH - יהוה.
        <br />
        We also do not see the importance or necessity of the holy language
        having more than one sound for a single letter. Shin (שׁ): The letter
        shin typically represented a sibilant consonant sound. In ancient
        Hebrew, it was likely pronounced as a voiceless postalveolar fricative,
        similar to the "sh" sound in English words like "shoe" or "ship." The
        placement of the dot above or inside the letter distinguishes between
        the "shin" sound (שׁ) and the "sin" sound (ס), though the exact
        pronunciation of the "sin" is still debated among scholars. Samekh (ס):
        The letter samekh represented a different consonantal sound. It is
        typically pronounced as a voiceless alveolar fricative, similar to the
        "s" sound in English words like "sit" or "see." We can find through a
        historical context where there became confusion between these letters in
        the book of Judges 12:6.
        <li>
          judges 12:6: Then said they unto him, Say now Shibboleth (שִׁבֹּ֜לֶת):
          and he said Sibboleth (סִבֹּ֗לֶת): for he could not frame to pronounce
          it right. Then they took him, and slew him at the passages of Jordan:
          and there fell at that time of the Ephraimites forty and two thousand.
        </li>
        This is also the case for letters "tet" and "Thaw". The use of the true
        Thaw has been lost in modern hebrew and does not exist by mainstream
        standards. In ancient Hebrew, the letter "thaw" (ת) is generally
        believed to have been pronounced as a voiceless dental fricative, which
        is represented in English by the "th" sound, as in the word "thin" or
        "thick." This pronunciation is indeed different from the sound of the
        letter "tet" (ט), which is often pronounced as a voiceless alveolar
        plosive, similar to the English "t" sound. The distinction between the
        "taw" and "tet" sounds reflects the phonetic diversity present in
        ancient Hebrew and other Semitic languages. Each letter in the Hebrew
        alphabet represented a distinct phoneme, and the differences in
        pronunciation between letters allowed for a richer and more nuanced
        expression of speech.
      </p>
      <h3>Heh - ה</h3>
      <p>
        Heh serves both as an exasperated breath and a vowel placeholder to
        avoid doubling an additional cosonant sound. It extends vowel sounds and
        adds emphasis to them. Doubling it fully as an "ah" sound would make it
        too similar to the aleph. In modern Hebrew, this issue is addressed by
        making the aleph silent and allowing the heh to function as a consonant.
        However, in reality, the aleph represents the inherent vowel sound of
        all letters. "Ah" and "hah" sound too similar, so when heh is at the
        beginning of a word, it functions as a consonant. When it occurs within
        words, it serves as a vowel extender or emphasis marker for that
        specific vowel. When at the end of a word it serves as a silent vowel
        placeholder to of whatever letter precedes it.
      </p>
      <h3>The Signs - האותות</h3>
      <p>
        The 22 letters that are used for hebrew literally come from the word
        meaning "sign" in hebrew "אות" (Oath). from a biblical perpspective,
        Oaths are the literal manifestations of something physical in
        understanding. for examply in the book of genesis we are told by elohim
        that the sun and the moon would be for "אותות" (signs). these are
        literal physical representations that are to be signs for us.
      </p>
    </div>
  );
}
export default LanguageHeader;
