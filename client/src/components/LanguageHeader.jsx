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
          represents the vowel placeholder creating the "oh" sound.
        </li>
        <li>
          ו (Waw): While primarily a consonant representing the /w/ sound, the
          letter Waw can also represent the vowel sounds /o/ or /u/. In
          anitiquity the vowel is primarly an "oh" sound like in the word
          "coat". Over time with the natural deduction of this vowel we have the
          "U" sound like in the word "noob". This deduction occurs naturally
          within speech and can cause the observer to hear a deduction of the
          natural "O" vowel. For instance, in the word "לרוץ" (la'rotz), meaning
          "to run" the Waw represents the vowel /o/ and with natural deduction
          this vowel sounds like the /u/ vowel.
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
        <br />
        we also do not see the importance or neccesity of the holy language
        having more than one sound for a single letter. For example the letter
        shen "ש" in anitiquity only had a single sound in pronunciation. this
        sound is the "Sh" sound that you get like in the english word Sharp. we
        already have another letter that represents the "S" sound like in the
        english word "sing", This letter is the "ס". we can find through a
        historical context where there became confusion between these letters in
        the judges 12:6.
        <li>
          judges 12:6: Then said they unto him, Say now Shibboleth (שִׁבֹּ֜לֶת):
          and he said Sibboleth (סִבֹּ֗לֶת): for he could not frame to pronounce
          it right. Then they took him, and slew him at the passages of Jordan:
          and there fell at that time of the Ephraimites forty and two thousand.
        </li>
        this is also the case for letters "tet" and "Thaw". natrual degradation
        of the Thaw makes it sound like a T sound like in the word "tea". when
        in reality it has always represented a th sound. so the word torah which
        means law and instruction is actually pronounced as Thorah. same goes
        for the word "shabath". The use of the true Thaw has been lost in modern
        hebrew and does not exist by mainstream standards/
      </p>
      <h3>Heh - </h3>
      <p>
        Heh being both an exasperated breath and a vowel placeholder is for the
        reason of not doubling an additional sound. Heh acts as a way to extend
        the vowel sounds and even put more emphasis on the vowel. It should be
        doubled fully as an ah sound being that it is too much like the aleph.
        Modern hebrew has masked this by making the aleph silent and allowing
        the heh to take on the role of a cosonant. When in reality the aleph is
        the inherent vowel sound of all the letters. "Ah" and "hah" sound too
        much alike so when heh is at the beggining of a word it takes on a
        consonant but when in the middle of words it acts as a vowel
        extender/exphasis marker on that specific vowel.
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
