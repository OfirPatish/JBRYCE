import { useEffect } from "react";
import { validateAndDispatchJWT } from "../../Utils/JWTAuth";
import { NavLink } from "react-router-dom";
import "./MainPage.css";

function MainPage(): JSX.Element {
  useEffect(() => {
    validateAndDispatchJWT();
  }, []);

  return (
    <div className="MainPage">
      <h1>Welcome to the Library</h1>
      <p>
        Discover a vast collection of books and authors. Our application offers a comprehensive search tool to help you
        explore and find your next read with ease.
      </p>
      <section className="navigation">
        <h2>Navigation</h2>
        <div className="nav-links">
          <NavLink to="/authors">Authors</NavLink>
          <NavLink to="/books">Books</NavLink>
        </div>
      </section>
      <section>
        <h2>Features</h2>
        <ul>
          <li>
            <strong>Author Directory:</strong> Browse through a comprehensive list of authors. Learn about their
            biographies, bibliographies, and more. Discover the stories behind your favorite writers and explore new
            ones.
          </li>
          <li>
            <strong>Book Collection:</strong> Explore a wide range of books available in our library. Filter by genre,
            author, or publication date to find exactly what you're looking for. Read reviews, summaries, and more to
            help you choose your next read.
          </li>
        </ul>
      </section>
      <section>
        <h2>Why Choose Our Library?</h2>
        <ul>
          <li>
            <strong>Extensive Collection:</strong> Access a vast database of books from various genres. Whether you're
            into fiction, non-fiction, or academic texts, we have something for everyone.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> Enjoy a seamless and intuitive browsing experience. Our interface
            is designed to be easy to navigate, even for first-time users.
          </li>
          <li>
            <strong>Real-Time Updates:</strong> Get the latest information on book availability and new arrivals. Our
            system is updated in real-time to ensure you have the most current information.
          </li>
          <li>
            <strong>Secure and Reliable:</strong> Trust in our secure platform to protect your data and privacy. We use
            the latest security measures to ensure your information is safe.
          </li>
        </ul>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum laborum ea, consequatur commodi delectus,
        reprehenderit odit officiis voluptatum necessitatibus similique eius iste fugiat minus earum vitae debitis modi
        doloremque vero. Maxime a, repudiandae voluptas facere aliquid quas optio. Recusandae ea et ullam maiores culpa
        nesciunt natus consequuntur aliquam pariatur provident totam ab saepe aperiam inventore, earum, sint perferendis
        at distinctio? Dolor molestiae molestias, deleniti vero nesciunt, magni earum consequatur rerum doloribus cumque
        culpa! Ea laborum reiciendis tenetur natus ipsam, qui perspiciatis quis, quas earum excepturi nemo, consectetur
        repellat minima. Consequatur. Necessitatibus in eligendi quis ad ipsum amet totam minus minima corporis dolore
        repellat quisquam, est temporibus doloremque rem repellendus nobis expedita, commodi ullam accusamus obcaecati
        corrupti labore dignissimos! Dolor, possimus! Molestias amet perferendis beatae obcaecati ducimus eius nobis
        quibusdam iure nulla aliquid. Doloribus esse quaerat dicta veritatis et, consequuntur minus fugit quisquam?
        Facere distinctio incidunt nostrum possimus necessitatibus corporis iure. Ipsum, quis? Voluptatibus commodi ad
        sit eveniet, assumenda modi temporibus saepe reiciendis, velit rem laborum? Exercitationem quo fuga odit laborum
        tenetur officiis, tempora incidunt illum, officia praesentium sunt quia deleniti? Magni similique tenetur totam
        corrupti autem quaerat iste ducimus, nihil ipsam, iure error dolorem dolore expedita. Est cum quod quidem
        delectus ipsa cupiditate dicta a itaque suscipit. Magnam, facilis in. Perferendis facilis nemo vitae consectetur
        magni, sapiente cum eos modi, quidem sed reiciendis, corporis nesciunt ex minus debitis molestias blanditiis
        dicta tempore aspernatur id aperiam assumenda? Provident quibusdam nihil ea! Ab repellendus beatae ad voluptate
        fugit reprehenderit repudiandae, aliquid consectetur. Rem neque deleniti blanditiis perferendis officiis hic.
        Nam debitis est quod atque beatae placeat fugiat, ad, incidunt deserunt, autem aliquid? Minus minima quidem
        quaerat molestias eum et fugit cumque dolorem architecto vel dolore, ab eos inventore, corrupti tempore, eius
        sint unde expedita nobis! Quas facere expedita quisquam, quidem dolorem error. Saepe repellendus laborum odit
        consectetur vitae accusamus, atque natus quo repudiandae ab dolorum doloremque perferendis blanditiis eos porro
        neque, ea debitis itaque numquam maiores quam eveniet exercitationem. Corporis, sed magni! Nisi sunt incidunt
        veritatis molestias. Obcaecati soluta eligendi facilis? Perferendis voluptatum ut natus assumenda id impedit
        placeat, ea reiciendis quod vitae! Numquam expedita veniam rem, cupiditate labore dolor in maiores. Explicabo
        repellendus impedit quibusdam dicta, eligendi et repellat quasi optio, voluptatum enim doloremque mollitia
        distinctio omnis officiis unde a animi! Similique sint nisi excepturi quidem distinctio, ipsa tenetur. Dolore,
        ipsa? Vero unde velit distinctio doloremque itaque. Officiis nobis animi laboriosam ut magni unde saepe nemo
        temporibus repudiandae adipisci accusamus voluptatum consequatur modi praesentium est, soluta pariatur, neque
        fugiat obcaecati quasi? Doloremque nobis vitae in quibusdam sit, libero dolore dicta id minus quisquam, veniam
        odit voluptate excepturi quia aspernatur labore recusandae. Labore, vitae. Velit totam dolorum magnam ab
        accusamus consequatur voluptate. Rerum commodi, at vero atque nam a aspernatur accusantium, reiciendis minima,
        vitae aliquid iste provident ad voluptas aperiam officiis nesciunt. Odit beatae voluptates laborum deserunt
        laudantium explicabo laboriosam odio dignissimos! Corrupti temporibus nisi placeat ut amet? Debitis, id
        quibusdam voluptatem aliquid vel ipsam tempora aliquam, consequuntur perspiciatis incidunt, cumque alias eaque
        molestiae fuga ad! Libero deserunt vero mollitia voluptate fugit? Optio architecto consequuntur quae provident
        quasi? Officiis necessitatibus illum quo dolores, nobis velit voluptatum dignissimos in ipsum, est alias ut
        ullam quos accusantium aspernatur fuga expedita veniam. Enim, sint beatae! Eveniet vel dolorum voluptates
        blanditiis consequatur animi earum placeat nisi maiores corporis fugit assumenda enim, sequi laboriosam!
        Voluptate eum nam suscipit assumenda fugiat tempore possimus consectetur quis aut, necessitatibus maxime. Sit
        non laborum atque. Nobis, distinctio soluta recusandae, sunt harum culpa assumenda incidunt deleniti dolores,
        reprehenderit nisi? Dolores ut neque cupiditate cumque sed exercitationem repellat et ipsam. Repellat, provident
        est! Quas ipsum cumque ab suscipit nam, beatae sunt laborum error repellendus dicta voluptate molestias. Et,
        facilis. Ad vitae tenetur, nobis impedit quos minima sed incidunt laudantium similique doloremque, pariatur quo!
        Illo quod ipsa, esse suscipit maxime quisquam obcaecati dignissimos cupiditate ullam magnam velit beatae quia
        dolore consequuntur est eligendi atque pariatur et explicabo vitae, inventore tempore omnis? Quisquam, facilis
        saepe. Molestiae libero beatae vero in explicabo, dolorem sit odio? Accusantium hic corrupti nam molestias.
        Aspernatur, at reiciendis asperiores praesentium sequi dignissimos, corrupti doloremque, iure ipsam corporis
        ducimus suscipit aut nobis! Ipsa fugit facere dolores architecto nam, possimus in quasi itaque provident aut
        perspiciatis veritatis, nemo deleniti rem eveniet eum reiciendis illo nesciunt enim odit commodi earum quisquam.
        Repellat, pariatur iure! Magnam quam dignissimos illum quia pariatur nemo eveniet, blanditiis consequatur
        repellat beatae laborum perferendis cumque qui ullam magni incidunt impedit recusandae. Voluptatibus magnam
        illum, aliquid nisi vero possimus voluptatum eligendi. Nam voluptate consequatur, facilis nostrum saepe dolorum
        voluptatem molestiae debitis perferendis unde consectetur sunt ratione. Repellendus debitis vitae quisquam
        mollitia cupiditate perferendis, quibusdam dolorem recusandae et deserunt illum nisi libero! Alias culpa
        corrupti enim nesciunt tempora eos, magni possimus, voluptatem, aliquid repellat laboriosam deleniti optio
        rerum? Possimus quae provident optio repellat et delectus animi illum quam, voluptatibus, nobis labore incidunt?
        Quia odio cum esse iusto repudiandae saepe, dignissimos est officiis enim? Excepturi, maiores fuga. Vel repellat
        enim quaerat aliquid ad iste suscipit? Doloribus natus repudiandae, ducimus dignissimos consectetur nihil
        dolore? Dolorum excepturi vero officiis neque laboriosam deserunt ullam debitis iusto ut, similique alias vel
        pariatur quo veritatis dolor earum nihil explicabo magnam perferendis, ab non aliquam inventore. Odio, quas
        odit. Praesentium magni provident aliquam. Vel repudiandae est iure perferendis saepe nihil ex commodi incidunt,
        sapiente amet voluptatem atque eius quaerat illo exercitationem nostrum. Molestiae aut dolorem architecto,
        voluptatibus vero aspernatur. Nam dolorum quisquam fugit id reiciendis autem officiis quasi doloribus architecto
        accusantium non repellat porro accusamus libero delectus assumenda sit in veniam, sequi doloremque. A temporibus
        optio iste distinctio quo. Distinctio nam voluptate tempore laborum reiciendis voluptatem fugiat voluptatum,
        eligendi autem impedit vitae, cumque iusto cupiditate aspernatur numquam dolorem soluta praesentium rem aliquam
        exercitationem, rerum facilis! Nihil aliquid nostrum nesciunt. Sapiente provident consectetur ullam quod
        voluptate molestiae quidem deserunt, saepe voluptas illo repudiandae aliquam, doloribus quo ratione. Temporibus
        quasi aliquam ut. Et pariatur, voluptate suscipit quidem aliquid sed voluptatum cumque. Architecto quidem a,
        nostrum ducimus esse laboriosam error corporis sit voluptatum odit eaque impedit tempora nam ad ipsam dolores
        deserunt nisi aut. Architecto placeat dolore, quam fugit eligendi ab excepturi. Voluptatum nobis odit maxime
        laboriosam quisquam atque tenetur dolor dolore repellat illum! Odit sapiente provident laborum vero ad facilis
        necessitatibus corporis ratione laboriosam aperiam impedit rerum beatae recusandae, tempora consectetur.
        Recusandae ea unde quia corrupti eligendi facilis vel consequatur accusamus assumenda optio? Inventore,
        consectetur aperiam. Fugiat sunt tenetur, blanditiis delectus, amet repellendus, alias corporis nam iusto
        asperiores sit sed rerum? Quos, dolorum fugiat, ipsam officia quia possimus vitae rerum mollitia eveniet illum
        sunt itaque. Officia, pariatur quod! Sed amet perspiciatis eaque aliquid inventore modi natus ipsam recusandae!
        Illo, distinctio ut? At nostrum facilis tempore quidem neque sint, deserunt ad aspernatur unde, ut reprehenderit
        ipsum, est commodi sit ex mollitia numquam iusto dolorum! Repudiandae maxime beatae ex, vel itaque voluptatem
        aspernatur. Odio beatae rem laborum, aspernatur velit ex magni eius ullam nisi dolorem voluptate cupiditate
        ipsam? Earum, velit alias ratione ducimus cumque ab, labore optio architecto quisquam consequatur dicta quia
        quae. Sint facilis assumenda nobis porro officia consequatur atque, ea omnis minima consectetur, autem
        asperiores, expedita reiciendis similique voluptates aspernatur itaque doloremque quas odit doloribus! Suscipit
        neque cum voluptatem accusantium iste? Impedit quo error nesciunt eaque, explicabo, omnis illum velit dolore
        autem consequuntur voluptatibus adipisci veritatis distinctio necessitatibus dolorum reiciendis eveniet eum.
        Officia explicabo tempora praesentium repellendus cupiditate ut asperiores delectus! Porro molestiae aperiam rem
        aliquid odio, alias qui numquam quia delectus exercitationem sequi minima doloribus mollitia maxime nemo magni
        sint magnam velit quisquam culpa, sit esse enim cumque. Neque, minus! Autem, possimus ratione? Ullam, accusamus
        vel asperiores reprehenderit soluta nobis expedita maiores aliquid explicabo cupiditate. Cumque libero modi,
        error culpa sit debitis quo possimus quisquam perspiciatis dolore veniam. Laborum, aliquam? Hic saepe mollitia,
        harum facilis reprehenderit excepturi quae voluptatem veniam repudiandae sunt unde sequi deleniti, nulla
        temporibus eius quod commodi. Voluptatibus officiis, dolorum sit nam dolor pariatur soluta quibusdam sequi! Quae
        sed, velit laudantium deleniti illum provident optio molestiae minus esse quam. Accusantium pariatur itaque
        distinctio ipsa maxime aut blanditiis enim vero praesentium voluptatibus. Tenetur voluptas culpa magni error
        neque. Maxime vitae in quas impedit, quam consectetur praesentium ratione fugiat repudiandae ipsa maiores itaque
        voluptatem est aperiam harum dolorum nostrum culpa ducimus quisquam nam aliquid cupiditate sapiente illum?
        Necessitatibus, nihil. Quod maiores similique, molestias ipsam, autem natus facere ullam maxime quo nostrum eos
        quibusdam, ipsum dolores? Pariatur excepturi id quae labore illum ex laboriosam, expedita, recusandae doloribus
        veritatis optio eos. Placeat praesentium perferendis a dolore omnis sint itaque delectus perspiciatis
        laboriosam! Doloribus iure recusandae dolorem minima veritatis, dolorum maiores, facere quis, vero praesentium
        quas! Cumque repellendus exercitationem quis consequuntur nemo. Veritatis debitis excepturi amet labore alias
        ratione quidem cum, deleniti dolores ipsa perspiciatis cupiditate soluta, sit obcaecati vel repellat porro
        aliquid autem ex commodi ipsam? Perferendis, labore totam? Eos, quae. Quaerat hic perferendis unde repellat enim
        vitae, amet asperiores vero deleniti placeat dicta eveniet libero deserunt recusandae aspernatur in, accusantium
        eos similique cum ea! Sequi atque non aperiam iusto nihil? Quibusdam fuga possimus modi quasi praesentium,
        dolores expedita deleniti mollitia obcaecati id hic? Modi quod incidunt nisi sunt. Saepe non laborum delectus
        nihil perspiciatis atque minima veritatis, voluptatum dignissimos vel. Fugit et, esse quo reiciendis neque
        placeat! Nemo saepe veritatis laudantium eos aliquam delectus ullam provident, reiciendis dolorem alias. Ab
        nesciunt odio ex reiciendis veritatis voluptatum ipsa, deserunt quas aperiam. Velit magnam quod, eum illum vel a
        optio, neque consectetur magni dignissimos totam delectus nobis excepturi minima ipsum placeat eius quis
        debitis, accusamus reprehenderit id quam distinctio perspiciatis? Praesentium, dolorum. Ipsa inventore
        consectetur, iusto placeat animi expedita iure laudantium quia quisquam nostrum repellendus ab dignissimos
        molestiae consequatur mollitia! Vero aliquid, provident itaque deleniti cumque illo numquam. Maiores qui nam
        molestiae! Autem illum adipisci cupiditate placeat, accusantium obcaecati necessitatibus provident quasi
        temporibus doloremque, unde et similique, natus eligendi consectetur optio nesciunt officiis beatae error
        tempora totam! Molestias animi placeat nihil sapiente? Corrupti, eos aliquam. Odit vero amet labore id illo
        cumque? Esse ratione est soluta aut temporibus facere vitae ex iusto quisquam, exercitationem maxime
        reprehenderit? Voluptatibus amet laudantium quidem quos autem. Suscipit libero incidunt dicta eius quas placeat
        aliquid, exercitationem repudiandae ipsam totam, dignissimos ut nostrum ratione culpa quae! Adipisci,
        reprehenderit quis ad nam commodi ipsa iusto? Assumenda nam beatae quaerat! Aut dolores perspiciatis ratione,
        nam odit, provident ipsum fuga voluptatum eligendi exercitationem numquam tenetur quod blanditiis, atque
        repellendus hic voluptas error maiores? Quod a minus accusantium minima blanditiis amet architecto! Voluptatum
        cumque reiciendis ipsa harum ex aperiam saepe corrupti a recusandae perspiciatis debitis quibusdam dignissimos
        sit, rerum dolor adipisci veritatis in libero incidunt ratione maiores? Numquam, molestiae omnis. Nihil, autem.
        Optio numquam est rerum quaerat aut labore autem totam recusandae quisquam, architecto porro corrupti ullam fuga
        nobis iste repellat sapiente dolores dolore pariatur corporis molestias eveniet eaque ipsa. Aperiam, at? Soluta
        ex, temporibus dolorem eligendi ad a culpa! Est reiciendis tempora, nobis totam cum aliquam, explicabo nisi
        asperiores, saepe dolor minus praesentium veniam esse? Deleniti ducimus laboriosam consequatur sit quos? Sunt
        tenetur unde quia molestiae, ullam optio est deleniti fugit recusandae vel culpa incidunt, laboriosam illum
        accusantium quam iure quod dolores dicta magni, sint voluptate ea deserunt voluptas doloremque? Reprehenderit.
        Reiciendis alias repellendus autem commodi provident perferendis beatae modi, eius, quas quibusdam aliquid! Enim
        voluptatem, mollitia delectus odit inventore suscipit eius quidem eaque impedit deserunt, recusandae nobis
        possimus corporis nesciunt. Rem omnis corrupti provident dolore quaerat adipisci quis. Facilis quasi voluptates
        dolore laudantium at mollitia velit, enim, porro recusandae, ullam alias sequi veniam? Itaque praesentium
        consectetur, cum debitis similique sapiente. Maxime voluptate asperiores repellat ipsam, aliquam nisi blanditiis
        odio doloremque! Et, adipisci reprehenderit deleniti tempore quas eveniet odio! Laborum, iste dicta! Reiciendis
        maxime iste obcaecati esse nisi odit pariatur dicta? Enim nulla tempore magnam, culpa exercitationem dolor.
        Adipisci accusantium aut, pariatur deserunt deleniti repellendus incidunt molestias eos modi facilis quas, omnis
        culpa nam possimus earum assumenda cum id vero voluptate. Maiores earum nostrum eaque sint! Incidunt nisi, vero
        aperiam optio inventore voluptas quibusdam exercitationem ratione officia cum quisquam ipsa adipisci placeat ex.
        Mollitia ratione laudantium libero aut excepturi aliquam dolorum? Architecto repudiandae cumque eaque, sequi,
        doloremque illum, autem quam voluptates officia nihil perspiciatis reiciendis deleniti pariatur quod earum
        assumenda quae nesciunt accusantium. Laboriosam at, fugit nulla maxime error reprehenderit fugiat! Laboriosam
        aut ea ipsam dolore totam est ipsa. Corrupti consequuntur odit suscipit fugit ad quas fugiat nihil consequatur,
        iusto esse inventore deserunt asperiores. Soluta illum, voluptates itaque minima facere dolor! Omnis deserunt
        velit obcaecati voluptates ullam esse iusto ea dolores doloremque quo! Maxime repudiandae in, ea perspiciatis
        sequi, porro voluptatem praesentium odio iusto adipisci aliquam dicta harum maiores? Consectetur, voluptatem.
        Voluptates velit, sit, magnam dicta officiis ducimus laudantium alias aspernatur inventore unde illo eligendi
        quos omnis qui obcaecati vel adipisci, dignissimos vero blanditiis similique necessitatibus provident rerum
        vitae! Hic, voluptates? Atque harum aspernatur earum veniam repellat iusto, porro a reprehenderit incidunt ea
        beatae culpa voluptas nisi ratione dolorum, corporis cumque laboriosam quo laudantium excepturi aliquam? Quasi
        sunt repellendus sint aperiam. Consequatur aspernatur eaque nam vel optio mollitia dolore nostrum! Deleniti
        obcaecati ab a est cum voluptas pariatur fugit beatae nulla, tempore distinctio temporibus harum ad magnam
        perspiciatis sunt? Vel, perspiciatis. Harum veniam animi deleniti reiciendis, obcaecati eligendi impedit
        voluptate, voluptatum velit minima libero quidem accusamus voluptates! Commodi saepe soluta aliquam laborum ad
        voluptate enim, doloremque natus, dicta itaque vitae incidunt? Quo itaque harum aperiam rerum expedita porro
        error sequi dicta iste! Cum accusamus dolorem et consectetur ut possimus commodi doloremque illo eius non!
        Labore placeat voluptatibus ducimus quia eveniet? Laborum. Placeat, soluta ducimus obcaecati magni corporis cum
        dolorem sit, dolore nobis natus distinctio est hic praesentium! Saepe neque, corporis in unde quia error magnam
        nam quae, inventore accusantium sit a. At tempora excepturi nulla ab cumque exercitationem vitae officiis iusto
        facere deleniti earum facilis ex unde eligendi, reiciendis, dolor aperiam magnam qui aliquid placeat
        consequuntur sapiente. Unde pariatur numquam repellat. Consequatur maxime quia voluptatem sunt voluptas,
        obcaecati reiciendis nobis doloremque laborum perspiciatis deleniti. Commodi ducimus earum labore blanditiis
        cupiditate, vitae voluptas dignissimos nulla nemo debitis voluptatem id tempora iusto aliquam! Repellat dolorum
        sed reprehenderit inventore earum, distinctio saepe veritatis nostrum doloremque exercitationem aliquam odio
        minima perspiciatis maiores fugit ab vel omnis, eum repellendus harum consectetur nemo eligendi corrupti. Quam,
        nesciunt? Necessitatibus alias doloremque temporibus laborum est dignissimos sapiente autem aut, a fugiat illo
        labore explicabo dolorem tempore voluptas placeat sequi facilis repudiandae! Vel ipsa laborum ut animi mollitia,
        eligendi labore. Quisquam, necessitatibus tenetur fugiat sapiente odio ut unde, suscipit magni exercitationem
        quidem minus dolores ducimus consequatur corrupti repellendus aliquid officia deleniti maxime minima fuga fugit?
        Enim molestias expedita porro recusandae? Quasi architecto ad iste molestiae laborum doloremque saepe, atque
        numquam dolorum dolorem quae veritatis. Magni sit voluptatem, ipsum optio, nulla est animi facere neque ducimus,
        possimus reprehenderit magnam nihil tempore? A consectetur rerum cumque dolorem commodi voluptatem ipsa
        doloremque laboriosam repellendus sint, blanditiis voluptate, error vero sit, provident perferendis ullam fugiat
        nostrum! Sunt architecto porro aperiam fuga illo rerum a? Tenetur pariatur maxime cumque quia nemo. Mollitia,
        fuga labore tenetur ducimus quisquam maiores explicabo assumenda architecto tempora praesentium quos. Ullam
        officiis dolores magnam voluptatibus necessitatibus illum ducimus iste molestias minima? Similique soluta,
        placeat omnis itaque, illo et repudiandae temporibus veniam cumque at rem quisquam quidem in porro quam culpa
        accusamus sit laudantium maiores tempora. Dolore fugit nemo voluptate repellat voluptatibus! Doloribus debitis
        ullam temporibus eligendi, dolor ad, magni, quas recusandae delectus voluptates autem aliquam. Sint architecto
        ad aspernatur tempore est ut a neque, molestias repellat error modi vel molestiae quo. Vitae dolorem dolore
        soluta, sunt cupiditate laborum consectetur unde animi quibusdam facere a quae excepturi nisi alias architecto
        officia dicta delectus molestiae similique harum quasi eos culpa aspernatur! Perferendis, asperiores. Harum enim
        accusamus commodi iure numquam. Omnis harum suscipit quibusdam, odio illum, ipsam, enim vitae ad voluptatibus
        laboriosam soluta cumque sint vero explicabo et accusantium sunt nesciunt fuga atque ipsa. Animi veritatis
        dolores et quia tempore quaerat minus unde nostrum odit nemo vero corporis corrupti culpa nam doloribus officia
        vel deserunt praesentium earum rem, qui perferendis dolorem rerum. Provident, impedit! Architecto beatae tempora
        esse labore optio eveniet deserunt ipsa ullam ipsam aperiam nesciunt possimus, ea pariatur fuga reprehenderit
        consequatur numquam nostrum sunt culpa at eos aspernatur eligendi ducimus! Enim, dolorum. Suscipit, rerum eius
        quod ducimus eaque iusto deserunt non laboriosam beatae eos perspiciatis fugiat blanditiis minima dolore
        accusantium quia aperiam ut ipsa fugit est cumque nobis delectus! Placeat, magnam vel. Aperiam assumenda quam
        veniam eos vero rem eaque alias pariatur quisquam dicta, consectetur nesciunt culpa minus maiores quasi modi
        doloribus sint necessitatibus iure illum. Iure architecto nam pariatur adipisci sequi. Distinctio obcaecati sunt
        dicta magni repudiandae libero, adipisci animi perferendis labore vitae reprehenderit praesentium fuga
        exercitationem voluptas ex voluptatem culpa aspernatur aliquam perspiciatis. Hic neque accusantium vitae
        voluptatum, consequuntur harum? Quis, adipisci voluptates reprehenderit facere quod et laudantium magni vel
        ratione alias nesciunt repudiandae ducimus voluptatum sunt blanditiis quas exercitationem iure esse neque quasi
        error placeat odit. Veritatis, corporis voluptatem. Facilis doloremque corporis consectetur ea eveniet, quas
        nesciunt maiores dolor ipsa sequi? Nesciunt dolorem animi illo hic, laudantium laborum unde dolore tempora eos
        quisquam provident voluptatum, voluptates aspernatur quis sint. Laboriosam molestiae architecto quo suscipit,
        blanditiis dolorem veniam in libero dignissimos voluptates culpa rem, iste, excepturi nostrum dolore voluptate
        repellendus consectetur non! Repellendus tenetur voluptate dicta, sit rerum perferendis atque. Vero, sapiente
        doloremque quia nostrum nisi dolor. Enim ullam cumque ipsam sit explicabo excepturi ut dignissimos, aliquam vel
        recusandae iusto doloribus sed cupiditate vero ex provident. Aliquam fugit dolorum suscipit. Natus perferendis
        sapiente odio aut eaque laudantium beatae, modi eos, libero neque sequi magnam quae consectetur harum, quasi
        numquam dolorem laborum itaque sit incidunt! Quisquam voluptatibus neque repellendus veniam explicabo!
        Recusandae quo dolorem voluptas eius natus, a, ullam numquam sint deserunt praesentium, sequi fuga reiciendis
        impedit consequatur nihil? Aliquid repellendus error sed labore sit mollitia quia cumque sint, a modi. Pariatur,
        in aliquid reiciendis ipsam dignissimos incidunt numquam quo soluta, veritatis repellat saepe quibusdam nobis
        iusto aliquam necessitatibus! Placeat autem sed earum minus voluptas non architecto ab sunt molestiae quaerat.
      </section>
    </div>
  );
}

export default MainPage;
