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
        marks called "nikkud" or are implied by context. Hebrew in anitiquity
        was written without "nikkud" vowel points in a system refered "matris
        lectionis". "Matres lectionis" is a Latin term that translates to
        "mothers of reading" or "mothers of pronunciation." In the context of
        the Hebrew language, it refers to certain consonant letters that were
        used to indicate vowel sounds. These letters are the "aleph", "waw",
        "yod".
      </p>
      <div className={`hebrew--list--${context.color}`}>
        <li>
          א (Aleph): Originally representing a glottal stop, the letter Aleph
          also came to represent the vowels /a/ or /e/ in various positions
          within words. For example, in the word אָב (av), meaning "father," the
          Aleph represents the vowel /a/.
        </li>
        <li>
          ו (Waw): While primarily a consonant representing the /v/ or /w/
          sound, the letter Vav can also represent the vowel sounds /o/ or /u/.
          For instance, in the word שׁוֹר (shor), meaning "ox," the Vav
          represents the vowel /o/.
        </li>
        <li>
          י (Yod): Besides functioning as a consonant representing the /y/
          sound, the letter Yod can indicate the vowel sounds /i/ or /e/. In
          words like בֵית (beith), meaning "house," the Yod represents the vowel
          /e/.
        </li>
      </div>
      <p>
        The use of matres lectionis became more standardized over time,
        particularly during the development of the Masoretic text, which added
        vowel diacritics (nikkud) to Hebrew script. However, even in modern
        Hebrew, matres lectionis are still employed to some extent, though they
        are not always explicitly marked. This understanding helps us better
        understand the true pronunciation of biblical areas, places, names and
        most importantly the most holiest name in our history YHWH - יהוה.
      </p>
    </div>
  );
}
export default LanguageHeader;
