import SacrificeCard from "../cards/SacriceCard";
import sacrificeData from "../componentData/sacrificeData";
import { ThemeContext } from "../components/themeContext";
import { useContext } from "react";
import "/src/css/sacrifice.css";

function SacrificeSmallPage() {
  const context = useContext(ThemeContext);
  const renderSacrficeCard = sacrificeData.map((item) => (
    <SacrificeCard
      title={item.title}
      image={item.image}
      description={item.description}
    />
  ));
  return (
    <div className={`sacrificePage--small--${context.color}`}>
      <div className={`sacrifice--paragraph--${context.color}`}>
        <p>
          From a technical perspective, the term for the initial sacrifice to
          YHWH stems from the Hebrew word "ascend" (עלה). This verb, in its
          essence, signifies going up, rising, ascending, and even climbing. The
          prescribed method for offering this sacrifice to YHWH is through the
          act of burning with fire. As the flames consume the offering, the
          altar becomes veiled in smoke, which ascends towards the heavens as an
          offering for Elohim to accept. This is why it is described as a
          pleasing aroma to YHWH.
        </p>
      </div>
      <h1>Ascension Offering to YHWH - קרבן עולה ליהוה</h1>
      <div className="offering--pic">
        <img 
          src="https://laymansbible.files.wordpress.com/2013/12/a-sacrifice-for-everything-sacrifice.jpg"
          alt=""
        />
      </div>
      <div className={`sacrifice--paragraph--${context.color}`}>
        <h2>Torah - Leviticus 1</h2>
        <p>
          1. And He called to Masha, and YHWH spoke to him from the Tent of
          Meeting, saying,
        </p>
        <p>
          2. Speak to the children of Israel, and say to them: When a man from
          [among] you brings a sacrifice to YHWH; from animals, from cattle or
          from the flock you shall bring your sacrifice.
        </p>
        <p>
          3. if his offering is an ascension offering (עולה) from the cattle
          (בקר) and from the flock (צאן). You all will approach and bring your
          approach offering. If a burnt offerring is his approach offering from
          the cattle, an unblemished male (זכר תמים) he will bring it to the
          opening of the tent of meeting. He will offer it of his own will
          before YHWH.
        </p>
        <p>
          4. And he will rest his hand upon the head of the ascension offering
          and its acceptable for him to atone with it.
        </p>
        <p>
          5. And he will slaughter the year old cattle before YHWH and the children of Aharon, the priests (הכהנים) will
          bring the blood
          and they will sprinkle the blood upon the alter (המזבח) all around
          which is at the opening of the tent of meeting.
        </p>
        <p>
          6. And cause to strip the ascension offering and cut it to its pieces.
        </p>
        <p>
          7. And the children of Aharon, the priest will place, fire upon the
          alter and they will arrange wood upon the fire.
        </p>
        <p>
          8. And the children of Aharon, the priests will arrange the pieces ,
          the head and the body upon the wood which is upon the fire which is
          upon the alter.
        </p>
        <p>
          9. and its innards and its legs he will wash in water and the prest
          will cause to smoke all the alter. It is an ascension offering by
          fire. It is a comforting smell to YHWH.
        </p>
        <p>
          10. And if from the flock is his approach offer from the sheep or from
          the goats for an ascension offering. an unblemished male he will
          approach with it.
        </p>
        <p>
          11. And he will slaughter it to the side of the alter to the north
          before YHWH and the sons of Aharon the priests, will sprinkle its
          blood upon the alter all around.
        </p>
        <p>
          12. And he will piece it to its pieces and its head and its fat, and
          the preist will arrange them upon the wood which is upon the fire that
          is upon the alter.
        </p>
        <p>
          13. And the innards and the legs he will wash in water and the preist
          will cause to approach everything and the cause to smoke the alter. An
          ascension offering it is of fire. It is a comforting smell to YHWH.
        </p>
        <p>
          14. And if from the birds is his approach offering to YHWH and will
          cause to approach from the turledoves or from the children of the dove
          is his approach offering.
        </p>
        <p>
          15. the priest will cause to bring to the alter and decaptitate (מלק)
          its head and cause to smoke the alter and drain () its blood upon
          walls of the alter.
        </p>
        <p>
          16. And cause to remove its ??? with its wings and cast its beside the
          alter to the east to the place of ash.
        </p>
        <p>
          17. And he will split it at its wings not will he divide completely.
          and the preist will cause to smoke it on the alter upon the wood which
          is upon the fire. An ascension offering it is by fire. It is a
          comforting smell to YHWH.
        </p>
      </div>
      <div className="sacrifice--paragraph">
      <h1>Grain offering to YHWH - קרבן מנחה ליהוה</h1>
      </div>
      <br />
      <div className="sacrifice--grainimages">
        <img
          src="https://images.pexels.com/photos/6294381/pexels-photo-6294381.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/1600139/pexels-photo-1600139.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/6287581/pexels-photo-6287581.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div className={`sacrifice--paragraph--${context.color}`}>
        <h2>Torah - Leviticus 2</h2>
        <p>
          "1. And the soul that will approach to offer a gift (מנחה) to YHWH of
          fine flour will be his offering and he will pour upon it oil and place
          upon it frankincense. and cause to bring it to the children of Aharon,
          the priests.
        </p>
        <p>
          2. And he shall bring it to Aharon's descendants, the kohanim, and
          from there, he [the kohen] shall scoop out his fistful of its fine
          flour and its oil, in addition to all its frankincense. Then, the
          kohen shall cause its memorial to [go up in] smoke on the altar; [it
          is] a fire offering [with] a comforting fragrance to YHWH.
        </p>
        <p>
          3. The remnant from the grain. for Aharon and for his sons. Holy of
          holies from the fire of YHWH.
        </p>
        <p>
          4. And if one brings a meal offering (קרבן מנחה) baked in an oven
          (תנור), it shall consist of [either] unleavened loaves (חלות מצות)
          [made] of fine flour mixed with oil, or unleavened wafers (רקיקי מצות)
          smeared with oil.
        </p>
        <p>
          5. And if a meal offering on a pan is your sacrifice, it shall be
          [made] of fine flour, mixed with oil; it shall be unleavened.
        </p>
        <p>
          6. Break it into pieces, and you shall [then] pour oil over it. It is
          a meal offering.
        </p>
        <p>
          7. And if your sacrifice is a meal offering [made] in a deep pot, it
          shall be made of fine flour with oil.
        </p>
        <p>
          8. Thus you shall bring the meal offering which shall be made from
          these [types], to YHWH. And he shall bring it to the kohen, and he
          shall bring it close to the altar.
        </p>
        <p>
          9. And the kohen shall lift out, from the meal offering, its memorial
          and cause it to [go up in] smoke on the altar; [it is] a fire offering
          [with] a pleasing fragrance to YHWH.
        </p>
        <p>
          10. And what remains of the meal offering shall belong to Aharon and
          his descendants; [it is] holy of holies from the fire offerings of
          YHWH.
        </p>
        <p>
          11. No meal offering that you sacrifice to YHWH shall be made [out of
          anything] leavened. For you shall not cause to [go up in] smoke any
          leavening or any honey, [as] a fire offering to YHWH;
        </p>
        <p>
          12. However, you shall bring them as a first [fruit] offering to YHWH;
          nevertheless, they shall not go up on the altar as a pleasing
          fragrance to YHWH.
        </p>
        <p>
          13. And you shall salt every one of your meal offering sacrifices with
          salt, and you shall not omit the salt of your God's covenant from
          [being placed] upon your meal offerings. You shall offer salt on all
          your sacrifices.
        </p>
        <p>
          14. When you bring a meal offering of the first grains to YHWH, you
          shall bring your first grain meal offering [from barley], as soon as
          it ripens, parched over the fire, kernels full in their husks, [ground
          into] coarse meal.
        </p>
        <p>
          15. And you shall put oil on it, and place frankincense upon it. It is
          a meal offering.
        </p>
        <p>
          16.Then, the kohen shall cause its memorial to [go up in] smoke,
          [taken] from its coarse meal and from its oil, with all its
          frankincense; [it is] a fire offering to YHWH
        </p>
      </div>
      <div className={`sacrifice--paragraph--${context.color}`}>
      <h1>Peace offering to YHWH - שלמים קרבן ליהוה</h1>
      <br />
      <div className="sacrifice--images">{renderSacrficeCard}</div>
        <h2>Torah - Leviticus 3</h2>
        <p>
          1. If his sacrifice is a peace offering, if he brings it from cattle,
          whether male or female, unblemished he shall bring it before YHWH.
        </p>
        <p>
          2. And he shall lean his hand [forcefully] upon the head of his
          sacrifice and slaughter it at the entrance of the Tent of Meeting. And
          Aaron's descendants, the kohanim, shall dash the blood upon the altar,
          around.
        </p>
        <p>
          3. And from the peace offering, he shall bring a fire offering to YHWH
          [comprised of]: the fat covering the innards and all the fat that is
          on the innards,
        </p>
        <p>
          4. and the two kidneys [along] with the fat that is upon them which is
          over the flanks. And he shall remove the diaphragm with the liver,
          along with the kidneys.
        </p>
        <p>
          5. And Aaron's descendants shall cause it to [go up in] smoke on the
          altar, apart from the burnt offering, which is on top of the wood that
          is on the fire; [it is] a fire offering [with] a pleasing fragrance to
          YHWH.
        </p>
        <p>
          6. And if his sacrifice for a peace offering to YHWH is from the
          flock, whether male or female, unblemished he shall bring it.
        </p>
        <p>
          7. If he brings a sheep as his sacrifice, then he shall bring it
          before YHWH.
        </p>
        <p>
          8. And he shall lean his hand [forcefully] upon the head of his
          sacrifice, and slaughter it before the Tent of Meeting. And Aaron's
          descendants shall dash its blood upon the altar, around.
        </p>
        <p>
          9. And from the peace offering, he shall bring a fire offering to YHWH
          [comprised of] its choicest part the complete tail, which he shall
          remove opposite the kidneys, and the fat covering the innards and all
          the fat which is on the innards,
        </p>
        <p>
          10. and the two kidneys [along] with the fat that is upon them, which
          is over the flanks. And he shall remove the diaphragm with the liver,
          along with the kidneys.
        </p>
        <p>
          11. And the kohen shall cause it to [go up in] smoke on the altar, as
          food for the fire, to YHWH.
        </p>
        <p>
          12. And if his sacrifice is a goat, he shall bring it before YHWH,
        </p>
        <p>
          13. and he shall lean his hand [forcefully] upon its head and
          slaughter it before the Tent of Meeting, and Aaron's descendants shall
          dash its blood upon the altar, around.
        </p>
        <p>
          14. And from it, he shall bring his offering a fire offering to YHWH
          [comprised of] the fat covering the innards, and all the fat which is
          on the innards,
        </p>
        <p>
          15. and the two kidneys with the fat that is upon them, which is over
          the flanks. And he shall remove the diaphragm with the liver; along
          with the kidneys he shall remove it.
        </p>
        <p>
          16. And the kohen shall cause it to [go up in] smoke on the altar,
          consumed as a fire offering, [with] a pleasing fragrance. All
          [sacrificial] fat belongs to YHWH.
        </p>
        <p>
          17. [This is] an eternal statute for all your generations, in all your
          dwelling places: You shall not eat any fat or any blood.
        </p>
      </div>
      <div className={`sacrifice--paragraph--${context.color}`}>
        <h2>Torah - Leviticus 4</h2>
        <p>1. And the Lord spoke to Moses, saying,</p>
        <p>
          2.Speak to the children of Israel, saying: If a person sins
          unintentionally [by committing one] of all the commandments of the
          Lord, which may not be committed, and he commits [part] of one of them
        </p>
        <p>
          3.If the anointed kohen sins, bringing guilt to the people, then he
          shall bring for his sin which he has committed, an unblemished young
          bull as a sin offering to the Lord.
        </p>
        <p>
          4. And he shall bring the bull to the entrance of the Tent of Meeting
          before the Lord, and he shall lean his hand [forcefully] upon the
          bull's head and slaughter the bull before the Lord.
        </p>
        <p>
          5. And the anointed kohen shall take from the bull's blood and bring it
          into the Tent of Meeting.
        </p>
        <p>
          6. And the kohen shall dip his finger into the blood and sprinkle some
          of the blood seven times before the Lord, before the dividing curtain
          of the Sanctuary.
        </p>
        <p>
          7. And the kohen shall place some of the blood on the horns of the
          incense altar which is in the Tent of Meeting, before the Lord, and he
          shall pour all the blood of the bull onto the base of the altar [used]
          for burnt offerings, which is at the entrance of the Tent of Meeting.
        </p>
        <p>
          8. And all the fat of the sin offering bull he shall separate from it:
          the fat covering the innards, and all the fat that is on the innards,
        </p>
        <p>
          9. and the two kidneys [along] with the fat that is on them, which is on
          the flanks; and the diaphragm with the liver, along with the kidneys,
          he shall remove it,
        </p>
        <p>
          10. just as was separated from the bull [sacrificed as] a peace
          offering, the kohen shall then cause them to [go up in] smoke on the
          altar [used] for burnt offerings.
        </p>
        <p>
          11. [He shall then take] the bull's skin and all of its flesh, along
          with its head and along with its legs, its innards and its waste
          matter.
        </p>
        <p>
          12. He shall take out the entire bull to a clean place outside the camp,
          [namely,] to the ash depository, and he shall burn it in fire on wood.
          Thus, it shall be burnt in the ash depository.
        </p>
        <p>
          13. And if the entire community of Israel errs because a matter was
          hidden from the eyes of the congregation, and they commit one of all
          the commandments of the Lord, which may not be committed, incurring
          guilt;
        </p>
        <p>
          14. When the sin which they had committed becomes known, the
          congregation shall bring a young bull as a sin offering. They shall
          bring it before the Tent of Meeting.
        </p>
        <p>
          15. The elders of the community shall lean their hands [forcefully] upon
          the bull's head, before the Lord, and one shall slaughter the bull
          before the Lord.
        </p>
        <p>
          16. The anointed kohen shall bring some of the bull's blood into the
          Tent of Meeting,
        </p>
        <p>
          17. and the kohen shall dip his finger from the blood, and sprinkle [it]
          seven times before the Lord, before the dividing curtain.
        </p>
        <p>
          18. And he shall then place some of the blood on the horns of the altar
          that is before the Lord in the Tent of Meeting. And then he shall pour
          all the blood onto the base of the altar [used] for burnt offerings,
          which is at the entrance to the Tent of Meeting.
        </p>
        <p>
          19. And he shall separate all its fat from it and cause it to [go up in]
          smoke on the altar.
        </p>
        <p>
          20. He shall do to the bull just as he did to the bull of the sin
          offering thus he shall do to it. Thus the kohen shall make atonement
          for them [the community], and they will be forgiven.
        </p>
        <p>
          21. And he shall take the bull outside the camp and burn it, just as he
          burned the first bull. It is a sin offering for the congregation.
        </p>
        <p>
          22. If a leader [of Israel] sins and unintentionally commits one of all
          the commandments of the Lord, which may not be committed, incurring
          guilt;
        </p>
        <p>
          23. if his sin that he has committed is made known to him, then he shall
          bring his offering: an unblemished male goat.
        </p>
        <p>
          24. And he shall lean his hand [forcefully] upon the goat's head and
          slaughter it in the place where he slaughters burnt offerings, before
          the Lord. It is a sin offering.
        </p>
        <p>
          25. And the kohen shall take some of the blood of the sin offering with
          his finger, and place [it] on the horns of the altar [used] for burnt
          offerings. And then he shall pour its blood onto the base of the altar
          [used] for burnt offerings.
        </p>
        <p>
          26. And he shall cause all its fat to [go up in] smoke on the altar,
          just like the fat of the peace offering. Thus the kohen shall make
          atonement for his sin, and he will be forgiven.
        </p>
        <p>
          27. If one person of the people of the land commits a sin
          unintentionally, by his committing one of the commandments of the Lord
          which may not be committed, incurring guilt;
        </p>
        <p>
          28. if his sin that he committed is made known to him, he shall bring
          his sacrifice: an unblemished female goat, for his sin that he
          committed.
        </p>
        <p>
          29. And he shall lean his hand [forcefully] on the head of the sin
          offering, and he shall slaughter the sin offering in the place of the
          burnt offering.
        </p>
        <p>
          30. And the kohen shall take some of its blood with his finger, and
          place [it] on the horns of the altar [used] for burnt offerings. And
          then he shall pour all of its [remaining] blood at the base of the
          altar.
        </p>
        <p>
          31. And he shall remove all of its fat, just as the fat was removed from
          the peace offering. The kohen shall then cause it to [go up in] smoke
          on the altar, as a pleasing fragrance to the Lord. Thus the kohen
          shall make atonement for him, and he will be forgiven.
        </p>
        <p>
          32. If he brings a sheep for his sin offering, he shall bring an
          unblemished female.
        </p>
        <p>
          33. He shall lean his hand [forcefully] upon the head of the sin
          offering and slaughter it as a sin offering in the place where he
          slaughters the burnt offering.
        </p>
        <p>
          34. And the kohen shall take some of the blood of the sin offering with
          his finger and place [it] on the horns of the altar [used] for burnt
          offerings. And then he shall pour all of its blood onto the base of
          the altar.
        </p>
        <p>
          35. And he shall remove all its fat, just as the sheep's fat is removed
          from the peace offering. The kohen shall then cause them to [go up in]
          smoke on the altar, upon the fires for the Lord. Thus the kohen shall
          make atonement for him, for his sin which he committed, and he will be
          forgiven.
        </p>
      </div>
      
      <div className={`sacrifice--paragraph--${context.color}`}>
        <h2>Torah - Leviticus 5</h2>
        <p>
          If a person sins, whereby he accepts an oath, and he is a witness [to
          some matter] by seeing or knowing [it], yet he does not testify, he
          shall bear his transgression;
        </p>
        <p>
          Or if a person touches anything unclean, whether it is the carcass of
          an unclean wild animal, or the carcass of an unclean domestic animal,
          or the carcass of an unclean creeping animal, and it was hidden from
          him, he incurs guilt.
        </p>
        <p>
          Or if he touches the uncleanness of a human, with any uncleanness
          through which he may become defiled, and it is hidden from him and
          [later] he knows, he has incurred guilt;
        </p>
        <p>
          Or if a person swears, expressing with [his] lips to do harm or to do
          good, whatever a man may express in an oath, and it is hidden from him
          and [later] he knows, he is guilty in any one of these cases.
        </p>
        <p>
          And it shall be, when someone incurs guilt in any one of these cases,
          that he shall confess the sin which he had committed;
        </p>
        <p>
          And he shall bring his guilt offering to the Lord for his sin which he
          had committed, a female [animal] from the flock either a sheep or a
          goat, for a sin offering. And the kohen shall make atonement from his
          sin.
        </p>
        <p>
          But if he cannot afford a sheep, he shall bring as his guilt offering
          for that [sin] that he had committed, two turtle doves or two young
          doves before the Lord, one for a sin offering, and one for a burnt
          offering.
        </p>
        <p>
          He shall bring them to the kohen, who shall first offer up that [bird]
          which is [designated] for the sin offering. He shall cut its head [by
          piercing with his nail] opposite the back of its head, but shall not
          separate [it].
        </p>
        <p>
          He shall sprinkle from the blood of the sin offering on the wall of
          the altar, and the remainder of the blood shall be pressed out onto
          the base of the altar. It is a sin offering.
        </p>
        <p>
          And he shall offer up the second one as a burnt offering, according to
          the law. Thus the kohen shall make atonement for him, from his sin
          which he had committed, and he shall be forgiven.
        </p>
        <p>
          But if he cannot afford two turtle doves or two young doves, then he
          shall bring as his sacrifice for his sin one tenth of an ephah of fine
          flour for a sin offering. He shall not put oil over it, nor shall he
          place frankincense upon it, for it is a sin offering.
        </p>
        <p>
          He shall bring it to the kohen, and the kohen shall scoop out a
          fistful as its reminder, and cause it to [go up in] smoke on the
          altar, upon the fires of the Lord. It is a sin offering.
        </p>
        <p>
          Thus the kohen shall make atonement for his sin that he committed in
          any one of these [cases], and he shall be forgiven. And it shall
          belong to the kohen like the meal offering.
        </p>
        <p>And the Lord spoke to Moses, saying,</p>
        <p>
          If a person commits a betrayal and trespasses unintentionally against
          [one] of the things sacred to the Lord, he shall bring as his guilt
          offering to the Lord an unblemished ram from the flock with a value of
          silver shekels, in accordance with the shekel of the Sanctuary for a
          guilt offering.
        </p>
        <p>
          And what he has trespassed against the holy thing he shall pay, and he
          shall add one fifth of its value to it, and he shall give it to the
          kohen. The kohen shall then make atonement for him through the ram of
          the guilt offering, and he shall be forgiven.
        </p>
        <p>
          If a person sins and commits one of the commandments of the Lord which
          may not be committed, but he does not know, he is guilty, and he shall
          bear his transgression.
        </p>
        <p>
          He shall bring an unblemished ram from the flock, with the value for a
          guilt offering, to the kohen. The kohen shall then make atonement for
          his unintentional sin which he committed and did not know, and he
          shall be forgiven.
        </p>
        <p>It is a guilt offering he has incurred guilt before the Lord.</p>
        <p>And the Lord spoke to Moses, saying,</p>
        <p>
          If a person sins, betraying the Lord by falsely denying to his fellow
          concerning a deposit, or money given in hand, or an object taken by
          robbery, or he withheld funds from his fellow,
        </p>
        <p>
          or he found a lost article and he denied it and swore falsely
          regarding any one of all these cases whereby a man may sin,
        </p>
        <p>
          and it shall be, when he has sinned and is guilty, that he shall
          return the article which he had robbed, or the funds which he had
          withheld, or the item which had been deposited with him, or the
          article which he had found;
        </p>
        <p>
          or anything else, regarding which he had sworn falsely, he shall pay
          it with its principal, adding its fifths to it. He shall give it to
          its rightful owner on the day [he repents for] his guilt.
        </p>
        <p>
          He shall then bring his guilt offering to the Lord: an unblemished ram
          from the flock with the [same] value, for a guilt offering, to the
          kohen.
        </p>
        <p>
          And the kohen shall make atonement for him before the Lord, and he
          shall be forgiven for any one of all [cases] whereby one may commit [a
          sin], incurring guilt through it.
        </p>
      </div>
    </div>
  );
}
export default SacrificeSmallPage;
