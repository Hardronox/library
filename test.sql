-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 16, 2017 at 05:56 PM
-- Server version: 5.7.18-0ubuntu0.16.04.1
-- PHP Version: 7.1.6-1~ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `picture` varchar(200) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `description`, `picture`, `created_at`, `updated_at`) VALUES
(1, 'Temporibus non accusantium ut.', 'Quas rerum quaerat iure dolorum. Sint numquam non ut. Sed ut et amet quos. Distinctio harum atque harum rerum aut aspernatur similique.', '/images/1.png', '2017-06-16 11:31:17', '2017-06-16 11:31:17'),
(2, 'Sequi quia atque ad.', 'Omnis atque possimus ut voluptatem qui. Sit ea sunt et est dolor dolores aut. Enim quo qui ducimus libero minima omnis. Laudantium non cum et minima quas sit sint.', '/images/1.png', '2017-06-16 11:31:17', '2017-06-16 11:31:17'),
(3, 'Sit ut ex.', 'Fuga architecto blanditiis dolore iusto. Nostrum aperiam ad reprehenderit rerum beatae amet pariatur. Quis iure nam ipsa consequuntur ea rerum ea voluptatem.', '/images/1.png', '2017-06-16 11:31:17', '2017-06-16 11:31:17'),
(4, 'Et quia.', 'Quia nulla autem hic. Neque rerum nobis itaque adipisci iure. Quas nulla neque sit modi quibusdam dolorum aut at. Adipisci asperiores quas ex optio odio aut mollitia voluptates.\nDoloremque autem error harum qui fugit. Quia fugiat aspernatur id magni. Qui esse cumque eos enim.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(5, 'Omnis dolor.', 'Et non quia saepe ipsum nemo. Sed facere fuga vero voluptatum. Ipsa vitae voluptatum eius voluptatem at rem iste. Ipsa voluptatem accusamus cupiditate ut et pariatur.\nEum sed maiores ut pariatur. Ut quibusdam et ut voluptas harum omnis.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(6, 'Illum labore in.', 'Omnis tempora et doloribus provident beatae. Laudantium suscipit alias delectus facilis numquam.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(7, 'Sint velit maiores quibusdam.', 'Incidunt architecto non rerum ut quod quia. Et rerum modi consequuntur totam esse. Corporis repudiandae provident et consequuntur nobis dolores perferendis.\nUllam architecto et necessitatibus fuga. Quia sunt non est vel. Qui ut ut veritatis placeat quia. Ut modi et magni aliquam illo est neque.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(8, 'Vero eaque non consequatur.', 'Rerum dolorem blanditiis corrupti assumenda. Et vero provident iusto iusto sint ut.\nLabore sit quas quia. Quia sint non eum ea eius. Unde dicta voluptates labore in voluptates ipsa.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(9, 'Maiores sunt ea sint.', 'Qui praesentium est voluptas distinctio tempora voluptatem velit. Atque corrupti aspernatur sint voluptas vitae maiores. Id magni sed laborum quis non ipsa. Ut officiis ut et consectetur sit accusamus quia.\nEos quaerat voluptatem iure dolorem voluptatem cumque eum. Ipsam est dolore quas voluptatem.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(10, 'Saepe deleniti eum in consectetur.', 'Adipisci beatae non molestias. Sed necessitatibus accusamus sint. Necessitatibus nihil nesciunt nam cum qui.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(11, 'Nam doloribus architecto quam.', 'Magnam dolores eum expedita repellat consequatur ut. Ullam quo et possimus quis. Quibusdam amet accusamus soluta eum.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(12, 'Sint id dolores.', 'Autem cum maxime et voluptatem quibusdam nam sit ut. Ducimus illo aut ea culpa eum. Nihil ut eius velit accusantium animi. Est nemo odit commodi odio.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(13, 'Provident aliquam quia.', 'Sunt excepturi illo maxime reprehenderit. Aut id sint cum quasi magnam iusto id velit. Ut maxime et sit quia ipsum.\nError architecto dolor vel architecto ullam ullam tempora. Eligendi cupiditate explicabo eligendi quos incidunt. Non consequatur perspiciatis molestiae occaecati qui et sed.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(14, 'Tenetur consequatur cupiditate quia soluta.', 'Quas porro voluptatibus dolor est aspernatur asperiores odio. Voluptas quam quidem quia asperiores libero cupiditate. Sapiente consequuntur voluptatum veritatis quam debitis molestiae. Placeat earum ad voluptatem eum odio.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(15, 'Enim similique repellat.', 'Adipisci nemo inventore dolor. Quo itaque nobis quia reprehenderit commodi sit nemo.\nUllam minus quo debitis dolores ullam. Omnis voluptatum eligendi harum autem. Est veritatis exercitationem illo aut ullam iure et. Quo quo vero reiciendis dolorem optio.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(16, 'Harum illum et.', 'Asperiores vero ipsam deleniti recusandae. Recusandae eius consequuntur perspiciatis nobis nam veritatis corporis. Velit consectetur expedita occaecati debitis sunt totam. Ipsam dolore facere molestiae laboriosam excepturi.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(17, 'Et sit impedit nam.', 'Facilis impedit amet molestias alias. Eveniet rerum et aperiam non voluptas fuga. Culpa esse ut adipisci dolorum aut. Iusto ea exercitationem voluptatem adipisci assumenda.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(18, 'Reprehenderit reprehenderit rerum dicta.', 'Aut qui mollitia dolorum eligendi. Voluptatem aut ea sed iste sapiente quidem asperiores quia. Earum qui nihil nesciunt sunt.\nSed et ipsa facilis molestiae beatae. Quibusdam distinctio totam eveniet quidem sed. Est dolor ut et aliquam.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(19, 'Veritatis ab porro eligendi labore.', 'Consectetur dolores est nemo culpa ratione. Iusto fugit aspernatur harum saepe consequatur ut. Et ut itaque sequi maxime officiis. Quas ut architecto cumque eos similique est.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(20, 'Odio culpa.', 'Qui vitae error nam aut sit vel debitis. Molestias animi laudantium quae iure ab quam. Ad ab quasi ad voluptatibus minus aut soluta fuga.\nAtque vel velit omnis dolore. Deleniti voluptas voluptatem ut est ea. Neque enim molestiae id occaecati sunt dolorem aperiam. Ut et veniam amet in quisquam.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(21, 'Perspiciatis reiciendis quo facilis ea.', 'Porro saepe maiores est ea qui autem laborum. Rem odio laborum est itaque eveniet rerum consequatur eum. Doloribus dolore ducimus modi et cum ea tempore.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(22, 'Doloribus est quis similique.', 'Quidem cumque recusandae qui unde inventore laudantium fugit aperiam. Hic cupiditate ex et sed adipisci magnam neque. Reiciendis laboriosam eum est saepe unde explicabo. Magni sed modi magnam est.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(23, 'Distinctio possimus sunt.', 'Modi rerum aut placeat eaque qui est quo. Repellendus dolores rem enim quas. Tenetur sed soluta amet doloribus provident blanditiis. Et voluptatum sunt officia non vero. Velit porro voluptatem et autem voluptate sequi est delectus.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(24, 'Qui fugit asperiores.', 'Minus voluptates quos expedita esse. Eos atque reiciendis a consequatur vel. Provident aliquam consequuntur ut eum. Nostrum est alias omnis. Omnis numquam labore et.\nAut molestias veritatis adipisci consequatur possimus. Dignissimos est eos magni natus. Iusto tempora et odio.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(25, 'Quia voluptas neque.', 'Omnis corporis expedita possimus non velit. Temporibus quisquam corrupti aut libero eos. Libero est enim labore. Voluptatem rerum aut earum maiores aut autem.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(26, 'Quasi harum provident quis.', 'Qui quis facere ea molestiae. Magnam vero mollitia est magnam et in doloribus. Sit harum molestias sed impedit blanditiis.', '/images/1.png', '2017-06-16 11:31:18', '2017-06-16 11:31:18'),
(27, 'Ex repellendus in hic.', 'Repellendus amet non deleniti iste optio. Odit dolore aut sunt et nemo illo expedita et. Molestiae rerum rerum sunt ea et asperiores sapiente. Aut sed fuga accusantium rerum ratione saepe sapiente.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(28, 'Magni voluptas perspiciatis.', 'Doloremque eum et eveniet. Nemo laudantium et illo et iusto.\nLibero numquam vero laboriosam ut quas consequatur est. Et culpa maxime facere aut. Occaecati culpa nesciunt tempora consequuntur cupiditate perferendis accusantium. Et delectus enim ut in.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(29, 'Et praesentium sit exercitationem.', 'Odit ipsam eos nemo quaerat culpa. Officia est illo nam molestiae. Illum qui ratione qui tempora molestiae.\nPraesentium fugiat atque et aut sit eum ipsum. Veniam repellat ab eaque ea aliquam. Quibusdam delectus iure pariatur voluptatum eum.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(30, 'Recusandae sapiente.', 'Pariatur ratione nihil assumenda repudiandae et voluptate et ut. Hic dolor corrupti sunt ipsum iusto deleniti.\nAperiam doloribus perferendis molestias sint. Tempora necessitatibus non sequi quis est. Consequatur tenetur dolores omnis ea voluptatem vel dolor. Omnis sint temporibus animi.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(31, 'Qui et a.', 'Illum sed recusandae veritatis quod. Iste omnis aut qui cumque officia dolorum. Voluptates eveniet veniam numquam suscipit expedita mollitia.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(32, 'Molestias nemo natus culpa dicta.', 'Et possimus tenetur beatae a est qui sequi. Pariatur occaecati pariatur sint aut magnam. Recusandae sunt nemo repellendus fuga rerum quas. Dignissimos ut aut porro perspiciatis et aliquam.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(33, 'Amet rerum.', 'Tempore saepe est necessitatibus. Asperiores ratione ipsa sunt non. Aliquid asperiores sunt eveniet maxime aut.\nSit qui voluptatem inventore fugit iste magni enim. Voluptas ut ut qui vel saepe. Est adipisci nisi aut qui accusamus hic labore.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(34, 'Perspiciatis autem sint.', 'Laboriosam ratione nostrum quia culpa alias. Dolore a quidem aliquam aliquam ut autem asperiores. Fugit ab dolorem sit autem. Sequi qui eius qui quaerat eos iste tempora. Necessitatibus sint modi voluptatibus quia.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(35, 'Libero maxime.', 'Inventore numquam distinctio dolores excepturi quia fugiat. Facilis occaecati veritatis nulla voluptatem voluptatem qui iure. Quo ullam dignissimos voluptatem sed debitis fugit dolore. Omnis enim maiores qui sit. Quia at aperiam facilis eveniet ex provident voluptatem quidem.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(36, 'Et natus ut eius.', 'Qui suscipit molestiae cumque iusto exercitationem dolores magnam. Odit et hic reiciendis labore est provident aut ipsa. Veritatis optio eum quam nulla neque harum perspiciatis cumque.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(37, 'Omnis alias quam deleniti.', 'Saepe sit sed velit officiis reprehenderit beatae deleniti. Velit cupiditate voluptas qui est. Ipsam nesciunt voluptatem ut quia. Laborum aspernatur iusto reiciendis et voluptatem facere iste temporibus.\nCum explicabo iure quo rem mollitia deserunt. Velit velit aut repudiandae at.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(38, 'Labore velit maxime quo.', 'Consequatur porro officia et ut. Non eius dolorem est qui saepe velit. Quisquam blanditiis unde repellendus possimus.\nEa saepe aspernatur qui aut quaerat ad sit. Nulla iusto deserunt et reiciendis fugiat. Quo voluptas facere ratione dolorum ducimus voluptatem.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(39, 'Et eos similique.', 'Ratione eligendi maxime veritatis consequatur odio eum. Rerum repellendus expedita beatae. Consequatur laudantium repellat ea sit omnis omnis. Consequuntur fugit dolorem necessitatibus et.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(40, 'Ea accusantium est porro.', 'Et quidem voluptatum architecto perferendis odit. Minus ad aut qui et deleniti eos.\nEst assumenda fugit dolorum fugiat aut quidem libero. Laudantium necessitatibus commodi doloribus ea maiores. Vel magnam voluptatem est. Expedita iusto consectetur at molestias.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(41, 'Quae aliquam quia aliquid.', 'Eveniet et repudiandae temporibus molestiae. Reiciendis autem vel aliquam minima ducimus non doloribus. Aperiam veritatis vel aut et voluptate sunt consectetur maiores. Architecto voluptatem et nostrum velit aut voluptas.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(42, 'Quod nihil est quia.', 'Ex nihil earum ratione. Dolorem odit in optio a ut. Incidunt corporis perferendis ea id id. Corporis beatae laborum nostrum voluptates. Voluptate animi aut aut inventore.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(43, 'Quo perferendis.', 'Libero repellat non velit distinctio quos repellat eos. Placeat non et voluptatibus unde. Eum consequatur accusamus et accusamus.\nQuis est exercitationem quia aut perspiciatis. Accusamus ipsa enim provident. Deleniti alias dolores totam quod et voluptatum odit.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(44, 'Quasi culpa ea.', 'Eaque voluptatibus consequatur dolores rerum. Id inventore laborum vel amet repellendus saepe ut. Rerum dolore in ab nemo. Vel est iste voluptas ratione. Eaque sed atque illum ut tenetur ipsa temporibus.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(45, 'Rerum totam quis molestiae quia.', 'Molestiae minus maxime sit fugit. Voluptatem ullam voluptatum est autem unde sunt deserunt. Distinctio nostrum et rem dolor. Dicta ut voluptatem vitae voluptatum non.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(46, 'Nihil unde minus ab.', 'Dolor quia ipsam tempore labore. Aut consequatur tenetur et. Reprehenderit nesciunt assumenda error sit praesentium nam nihil. Aut harum praesentium deleniti amet quia ipsum ducimus voluptatibus.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(47, 'Modi ea incidunt reiciendis.', 'Ipsam repellat consequatur eius perferendis. Et reprehenderit assumenda recusandae quas. Accusamus aliquam dolorum animi quo rerum nihil commodi.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(48, 'Eos tempore id.', 'Autem ut ut ex et. Nesciunt tempora iusto necessitatibus et ut. Eos quia ratione enim voluptas eius et. Et eius quis expedita molestiae ipsum culpa maiores.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(49, 'Non sed temporibus corporis.', 'Vitae est quod iste vitae magni. Numquam ipsum voluptatibus aut itaque velit eius est. Consequatur perspiciatis enim enim numquam cupiditate consequatur enim autem. Est illum provident quaerat corporis vel aut.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(50, 'Libero molestias a temporibus.', 'Ipsum impedit ad nihil possimus debitis vel quisquam est. Sit repudiandae ut et voluptatem aperiam maxime. Tenetur eius reprehenderit est at labore neque officiis quasi. In sunt animi rerum optio. Libero sapiente aliquam consequatur neque qui repellendus saepe.', '/images/1.png', '2017-06-16 11:31:19', '2017-06-16 11:31:19'),
(51, 'Sed et quibusdam sapiente.', 'Fugit et consequuntur sed rem. Non eius earum perspiciatis fuga. Aspernatur provident quaerat autem est ex porro. Et qui voluptatibus dolore modi ut eum omnis.', '/images/1.png', '2017-06-16 11:31:20', '2017-06-16 11:31:20'),
(52, 'Sit est.', 'Tempore non eaque odio dolorum ut fuga. Blanditiis ea quis vel magni. Est dicta velit non repellendus quidem. Est dolore excepturi eos facilis omnis.', '/images/1.png', '2017-06-16 11:31:20', '2017-06-16 11:31:20'),
(53, 'Quia sint velit.', 'Et et quae omnis dolorum vel ipsam magni. Ipsa placeat sint nemo voluptatem. Voluptas qui praesentium cupiditate ratione. At quia ut sint rem illum.', '/images/1.png', '2017-06-16 11:31:20', '2017-06-16 11:31:20'),
(54, 'Placeat harum sint.', 'Et ut rerum possimus dolorem est veritatis. Laudantium est et quasi facilis ut. Id fugit aspernatur quia totam.\nAut labore inventore rerum. Culpa et voluptatum omnis est et iusto. Et et id nam. Et ea non quia sed.', '/images/1.png', '2017-06-16 11:31:20', '2017-06-16 11:31:20'),
(55, 'Dignissimos iusto fuga non.', 'Aliquam temporibus officiis eos ut maiores. Dolorem excepturi enim officiis earum officiis. Quaerat iure ducimus a rem molestiae dolor natus. Atque non aut atque reprehenderit ipsa dolorum rerum.', '/images/1.png', '2017-06-16 11:31:20', '2017-06-16 11:31:20'),
(56, 'Voluptas soluta qui.', 'Doloremque quo suscipit ea eius. Delectus ratione animi autem rerum impedit.\nEarum est eius repellat consequatur. Necessitatibus inventore veniam quia facere quo. Et laudantium voluptatem aut aliquam hic dolorem quod.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(57, 'Ut voluptatem occaecati rerum et.', 'Odio quia quos voluptatem quam nesciunt. Similique consequuntur molestias dolor mollitia eos aut maxime architecto. Nulla eos nihil et quia voluptatem. Ea et fugit omnis fugiat molestiae et. Eligendi provident neque velit ad necessitatibus qui.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(58, 'Doloremque nostrum explicabo nihil.', 'Aspernatur quia esse est dolorem voluptatem aliquam quos. Excepturi repellendus aut laudantium magni dolores deserunt neque. Quia eos amet enim.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(59, 'Iure beatae et.', 'Quae velit corporis qui et asperiores eum cumque voluptatem. Fuga illum consequuntur est nesciunt eum. Atque distinctio dolores odit quis voluptatum. Et veritatis qui eius ad.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(60, 'Magni voluptatem necessitatibus voluptas.', 'Odio et illum sed accusantium minima atque molestiae. Ad labore consequatur iusto possimus hic voluptatum consequatur possimus. Omnis voluptatem et ex sunt qui libero. Assumenda tenetur quo libero fugiat molestiae tempore qui. Itaque et voluptatem et doloribus voluptas.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(61, 'Non sunt eius.', 'Voluptatibus deserunt quaerat laudantium nulla incidunt dolores. Aut sit adipisci voluptate eum. At voluptatem alias cum in quia suscipit non. Voluptatem minima iste aut qui odit alias.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(62, 'Maiores voluptate repellat repellendus.', 'Sed occaecati quibusdam magnam ut architecto ut aut. Impedit ut ut voluptatem et omnis consectetur. Labore porro beatae qui consectetur et ipsa. Maxime dolor facere ad eveniet consequatur illo.\nQui delectus quisquam similique vel. Ex maiores rerum velit aut sed. Et quia quisquam quos et molestiae.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(63, 'Quae pariatur et.', 'Eum tempore eius expedita earum maxime accusantium impedit. Eos ut rerum rerum quae. Veniam maxime itaque ipsum et quis voluptas rerum. Repellendus inventore enim quis ullam quibusdam.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(64, 'Dolores deserunt odio.', 'Repellat explicabo odit earum sed molestiae. Esse omnis sunt quis provident velit. Quas aliquam quae saepe.\nEt eum aliquid molestiae id vel eos quae. Id enim ipsam velit cupiditate vitae et repudiandae consequatur. Sunt quis cupiditate provident eos.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(65, 'Enim architecto.', 'Corporis amet distinctio dolores velit mollitia voluptatem dignissimos at. Veritatis nihil laudantium praesentium quis perspiciatis. Nihil possimus quis ab enim non omnis excepturi.\nVoluptatibus dicta in ut non. Est hic esse dolores distinctio nemo nihil et.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(66, 'Molestiae sit consequuntur.', 'Repellat quo sit impedit voluptatum eum aut. Dolor fuga atque ut ut veniam enim. Qui inventore quidem harum distinctio. Aperiam laboriosam aliquid et fuga perspiciatis distinctio nostrum.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(67, 'Est et.', 'Omnis deserunt necessitatibus est doloremque. Et ut velit debitis ut dolores. Et id ipsam similique quo cumque sunt ut. Et hic id ducimus in laboriosam consectetur.\nDolores expedita iste ullam vero veniam vero fugit. Quia aut corrupti sed aut aut eos blanditiis. Magni autem sint quaerat corporis.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(68, 'Magnam voluptate sunt.', 'Pariatur rerum quia blanditiis eligendi vitae est. Aut aspernatur velit esse sed vel. Debitis veritatis laborum autem magni non.\nOfficiis delectus dolor deserunt qui praesentium. Labore iure qui qui quam aliquam eaque molestiae. Modi unde facilis aliquid praesentium soluta sit.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(69, 'Harum sunt.', 'Sequi quisquam voluptatem consequatur ut ducimus qui. Quod ab aut perferendis qui suscipit soluta quia. Qui non consequuntur omnis consequatur. Eos labore est id ipsum modi quia.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(70, 'Ratione nulla.', 'Doloremque dolores mollitia sunt veniam. Deserunt vero voluptatem non ipsa rerum accusamus possimus recusandae. Velit impedit omnis esse.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(71, 'Voluptatem dolores laudantium quae aut.', 'Est dolore qui voluptate pariatur voluptatum tempora qui. In placeat omnis unde doloremque quidem et. Qui in et minus nostrum sequi culpa. Aut numquam perspiciatis facere quod corporis.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(72, 'Voluptas autem non omnis.', 'In ut qui voluptas dolor id est quia quis. Nesciunt nulla aliquam velit voluptas ratione velit cumque fugiat. Ad explicabo nostrum atque illo dolorum et. Provident sequi dolor labore distinctio voluptatem ducimus.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(73, 'Totam sapiente ex accusamus.', 'Quam eaque qui quibusdam neque est quis quibusdam. Quia sunt ut enim aliquid vel est asperiores cumque. Autem praesentium ipsa autem omnis expedita eos eos. Laborum et facere eaque id.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(74, 'Vero vero.', 'Recusandae omnis consectetur consectetur laborum asperiores. Ut sed aut incidunt et nihil. Sed non perferendis sint non dolorem cumque.\nPorro dolorem fugiat magni perspiciatis. Pariatur itaque voluptas in tempore. Rerum autem quam officia voluptatem sint. In magnam deserunt quia et esse error.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(75, 'Non harum sed accusamus.', 'Nemo cumque eveniet doloremque quos quos. Recusandae laudantium sed perspiciatis. Aut cumque perferendis similique et quo sint. Dolorum minima fugit sit ullam id voluptas quia.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(76, 'Alias quod.', 'Voluptates iste nemo vero quasi est et cupiditate. Sapiente suscipit atque porro hic perspiciatis voluptas. Velit sit incidunt dolore alias molestiae.\nTempore sit est sunt quaerat. Unde iste recusandae illum accusantium rerum qui et ipsam. Fugit est est quis illo ipsa.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(77, 'Voluptas laboriosam odit consequuntur ipsa.', 'Aut eum consequatur consequatur blanditiis ex in eum nam. Sit ut nesciunt est animi tempore. Rerum magnam nisi inventore impedit expedita velit. Ut error similique quam culpa modi illo.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(78, 'Dolorem ex sunt mollitia.', 'Illo molestiae voluptatum atque sed. Ipsam quas voluptas qui qui sit et. Magnam voluptatibus quas sunt modi doloremque incidunt alias. Asperiores voluptate provident qui aut id sint.\nCorrupti quidem neque labore. Qui praesentium a eligendi eos molestiae voluptas voluptatem.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(79, 'A error tempora explicabo.', 'A est consectetur aliquid ea maxime repellat. Eaque possimus consequatur aut quam deserunt dolorem. Fugit laborum excepturi placeat et est. Nostrum similique sint consequatur eum velit cumque velit.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(80, 'Unde nisi ducimus accusamus.', 'Officia enim rerum sint omnis maiores animi aut. Deleniti blanditiis rerum quos quas cupiditate. Tenetur eum molestias rerum dignissimos totam dolorem ad. Dolorem et facilis voluptate est quaerat quia qui.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(81, 'Dolor dignissimos exercitationem repellat.', 'Doloremque iure enim minima repellendus asperiores quod. Perferendis facere eos aliquam qui consequatur suscipit. Laborum veniam deleniti omnis nam.', '/images/1.png', '2017-06-16 11:31:21', '2017-06-16 11:31:21'),
(82, 'Illo sed vel dignissimos.', 'Unde unde numquam provident est unde libero. Dolor nobis incidunt et eos. Quasi id voluptas molestiae consequatur pariatur beatae. Recusandae modi quas et voluptatum.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22'),
(83, 'Saepe officia et.', 'Qui fugit laudantium labore quis iusto. Molestiae magni veritatis explicabo est impedit excepturi ratione. Nobis debitis consequatur error.\nMagnam qui quo quis cupiditate tempore voluptas. Voluptatem ea est et incidunt id. Deserunt qui placeat vero est ducimus velit placeat odio.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22'),
(84, 'Minus qui dolore.', 'Amet et ratione amet omnis error. Voluptatem architecto possimus omnis iste doloribus praesentium quam. Ipsum pariatur nulla aliquid non ea.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22'),
(85, 'Dolorum quaerat atque aperiam.', 'Consectetur sed quia assumenda amet reprehenderit asperiores. Natus accusantium doloremque voluptates consequuntur. Id aliquam sint repellendus voluptas molestiae esse.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22'),
(86, 'Ut repellendus voluptatibus.', 'Voluptas exercitationem aperiam non totam sit. Illo culpa ut dolor quos. Dignissimos consequatur rerum animi porro.\nDolore impedit dignissimos et atque. Eos quia est possimus quia. Eos deserunt dolorum totam.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22'),
(87, 'Vel voluptate quam dolorem.', 'Corporis beatae distinctio omnis aspernatur cum. Autem tenetur sed et et. Occaecati autem voluptate veritatis quia ipsa. Minus quod sunt explicabo rerum nisi labore est dolores.\nVitae non sit maiores facilis. Nisi nemo nisi corporis quae voluptatem. Quaerat id non et similique.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22'),
(88, 'Omnis aperiam quibusdam maiores.', 'Fuga ut sed libero qui beatae itaque. Quia iusto et et soluta suscipit sit.\nFacilis rerum corporis repudiandae sapiente asperiores nihil. Distinctio aut doloremque beatae autem eveniet. Et autem pariatur in non aut voluptates. Perspiciatis sint repudiandae at voluptatem.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22'),
(89, 'Voluptas eum quod corrupti nihil.', 'Repellendus quia aut omnis totam dolor. Sit blanditiis porro voluptas sed a. Quidem quos fugiat mollitia saepe culpa quia. Cumque nihil modi sit rerum et aspernatur.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22'),
(90, 'Sint omnis.', 'Commodi esse ad ratione perferendis minima voluptatibus sint. Numquam expedita eveniet voluptatem quidem necessitatibus sunt amet delectus.\nEt ut eos necessitatibus ut animi delectus. Sapiente animi nostrum sed sit. Mollitia in et ea non aut adipisci accusantium cum.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22'),
(91, 'Repellat aut dicta.', 'Ullam adipisci distinctio dolores ducimus. Explicabo quisquam accusamus soluta beatae officia. Est cumque enim qui modi aut quaerat quidem optio.\nAdipisci facere alias omnis ut. Dolor dolores corrupti modi est. Repellat distinctio a blanditiis quia libero tempora nemo. Id ut dolore sunt harum.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22'),
(92, 'Sint earum ullam aut.', 'Quos dignissimos necessitatibus atque et. Repudiandae assumenda architecto nihil in assumenda. Non earum deleniti dolores placeat dolorem alias sed.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22'),
(93, 'Impedit veritatis ab.', 'Nobis voluptate repellat laborum reiciendis. Quidem rerum hic dolor laboriosam assumenda totam. Facilis repudiandae libero quisquam quae.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22'),
(94, 'Eum quos eligendi eos deleniti.', 'Fugiat voluptatibus quos omnis ut. Maxime id non vel id incidunt. Qui voluptatem reprehenderit laudantium possimus. Fugiat nostrum iste debitis cumque quasi.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22'),
(95, 'Quidem sit possimus.', 'Soluta mollitia sunt quia. Praesentium magni impedit qui vel repellat eum. Praesentium porro consequatur quod iure natus eos.\nEum eaque velit ad. Non unde et maxime voluptatum aliquid dolore. Iure dolorem repudiandae aut qui quia.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22'),
(96, 'Voluptatem eligendi iure.', 'Rem sit dolore non magnam et tempora. Non sint dolor nesciunt ipsam. Et sequi modi sed laborum et occaecati temporibus.\nVoluptate alias dolorem eveniet veritatis. Voluptatem rerum et dolor. Quia eaque et fuga aut adipisci est. Corrupti perferendis aut in id.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22'),
(97, 'Quaerat sit ea.', 'Quia aliquid non esse dolor. Officiis quis dolores aut labore dolore. Nemo et consequuntur cupiditate nihil. Eaque asperiores numquam sit. Consequuntur est ea odit vel quasi ea quia maxime.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22'),
(98, 'Soluta et recusandae ullam.', 'Omnis esse et inventore est dolore consequatur. Earum sed sit molestiae unde quas voluptate. Libero voluptas quos reiciendis quod rerum error sit.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22'),
(99, 'Quo sunt in culpa.', 'Nostrum voluptatibus aut eum et id. Dolore id vel est reprehenderit dolore rerum. Nobis ratione quo eum neque culpa.\nEa cum ut ad distinctio nam et qui. Architecto aut adipisci quam eaque. Quibusdam voluptatem qui perferendis iure eos quis cumque.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22'),
(100, 'Reprehenderit non voluptas pariatur.', 'Id id ad aliquid. Sed voluptatem impedit non cum ut odit deleniti. Recusandae quos eum corporis rem. Iusto eum quis id rerum quia.\nSed deserunt sed amet quo. Ut id iste nostrum. Voluptates quae eos eaque est voluptates non. Delectus neque facilis est assumenda.', '/images/1.png', '2017-06-16 11:31:22', '2017-06-16 11:31:22');

-- --------------------------------------------------------

--
-- Table structure for table `book_category`
--

CREATE TABLE `book_category` (
  `book_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `book_category`
--

INSERT INTO `book_category` (`book_id`, `category_id`) VALUES
(54, 2),
(56, 2);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Thriller'),
(2, 'Novel'),
(3, 'Fable'),
(4, 'Drama');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(3, '2014_10_12_000000_create_users_table', 1),
(4, '2014_10_12_100000_create_password_resets_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'kek', 'kek@gmail.sdf', '$2y$10$0zt5TJ9q/9UeNPJqZtZiSuZ.kiX7.txmBJnVRp1hwRa6yUmQlcSE2', NULL, '2017-06-14 05:49:18', '2017-06-14 05:49:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
