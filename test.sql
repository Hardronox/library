-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 21, 2017 at 12:00 PM
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
  `picture` varchar(200) NOT NULL DEFAULT '/images/1.png',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `description`, `picture`, `created_at`, `updated_at`) VALUES
(1, 'Laboriosam фимвыафыва', 'Expedita nobis a tempora. Ducimus in fugiat repellendus pariatur nostrum aut voluptatem. Et consectetur nulla temporibus.\r\nFugit laudantium facere non nulla consequatur laborum nesciunt. Eaque rerum quia est et.\r\nDoloremque facilis fuga distinctio vel ratione nulla ab eaque. Laboriosam autem laborum ut porro sed eum quis.\r\nEaque ea provident cum omnis eveniet. Sit impedit ea eum asperiores eligendi.фывафыва', '/images/1.png', '2017-06-19 09:10:05', '2017-06-20 11:49:10'),
(2, 'Cum animi optio fugiat.', 'Qui et possimus illum et. Praesentium eos porro corrupti. Sequi magnam nulla veniam.\nIllo esse aut aut perferendis veniam unde possimus. Ut aspernatur voluptates et assumenda ipsum et. Sequi animi officiis architecto aliquam.\nMaxime esse corrupti odio praesentium facilis mollitia. Nemo id minus minima aspernatur. Fugiat vel ut ab fuga non. Optio vel blanditiis omnis in. Sed cupiditate eaque ipsa et.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(3, 'Placeat eos libero velit.', 'Sit omnis velit officiis optio nisi pariatur. Eveniet animi aut necessitatibus reiciendis quas ea ex libero. Deleniti aut et ut quia. Debitis esse et porro dolorum quas totam.\nMagnam odit sunt voluptate quam. Reprehenderit illo accusamus et numquam cupiditate culpa. Sequi et molestiae dicta quo deleniti eius itaque. Unde quo veniam est qui hic dolorem accusamus.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(4, 'Non quos alias.', 'Rerum minima saepe quae qui qui quia. Quam excepturi ad perferendis aut itaque. Modi suscipit commodi quia occaecati. Nemo est blanditiis nulla eum et sed temporibus. Odio aut repellendus dolores doloribus ducimus et similique.\nSunt velit at dolorum natus iusto repellat. Voluptatum molestiae expedita distinctio omnis. Beatae itaque libero sed aliquam veniam ab error. Laborum rem veritatis hic.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(5, 'Facere accusamus perspiciatis.', 'Modi qui temporibus aut ipsa quo impedit. Ut enim praesentium commodi. Blanditiis unde facere architecto id.\nEt qui quasi accusantium alias porro architecto est. Nisi eum et officia repellat asperiores quia nulla. Omnis pariatur rerum dignissimos dolor dolorem rem. Neque impedit soluta explicabo saepe nihil sit.\nPorro et quo iste molestias laboriosam ipsum. Sed ad aperiam nihil a iure debitis sit. Hic dolores atque sit officiis molestias non.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(6, 'Explicabo reiciendis et enim.', 'Quo soluta aliquid cupiditate dolorum est. Eos aspernatur autem labore ut deleniti est animi illum. Iure quia necessitatibus sunt eum consequatur iusto dolores voluptatum.\nEius et sed possimus et officiis laudantium. Provident veritatis a exercitationem dicta nihil architecto.\nIste et incidunt alias hic ullam. Vitae ratione aliquam quia consequuntur. Eius adipisci aliquid quo expedita ad beatae reprehenderit. Repellendus voluptatum sed ut aut.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(7, 'Ipsam et.', 'Illo aliquam non eum aliquid repellat eum. Ipsam ullam quisquam facilis unde. Sed eos est similique omnis quia voluptatem nam. Accusamus aut modi ut omnis cumque tempora voluptatem aut.\nEx delectus reprehenderit voluptatem soluta consectetur. Ipsa architecto perferendis eligendi qui reiciendis adipisci consequuntur. Veritatis rerum corrupti laborum assumenda quia totam quasi fugiat.\nConsequatur voluptatem at quia ipsam. Minus consequatur esse recusandae.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(8, 'Qui vel nesciunt corporis.', 'Et non voluptates dolorem officia sunt. Ut nam delectus facilis sunt blanditiis. Reiciendis quod sunt odio eveniet quia. Id ipsa aliquid quia ea asperiores sit enim praesentium.\nIure id dolorum est quod quos. Aut rerum illo laboriosam inventore sit itaque. Ut officia ipsam architecto explicabo vel.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(9, 'Est asperiores facere quia.', 'Aut ut nobis consequatur in. Dignissimos ea amet occaecati quas est. Harum omnis nisi iste et. Eaque nostrum eos voluptatum magni.\nOccaecati modi numquam et est omnis dicta. Sint quas aut minus perferendis nihil ad porro. Assumenda laboriosam tenetur culpa. Exercitationem qui vero necessitatibus quibusdam non consequatur.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(10, 'Similique omnis qui iure.', 'Corrupti a totam dicta vel autem enim. Et sapiente temporibus quod esse. Enim aliquam maiores harum numquam accusantium.\nSit natus mollitia eligendi quo. Voluptatem quo accusantium error. Maxime architecto magni sequi at recusandae. Eum voluptatum doloribus id tempore tempore temporibus.\nAut voluptate deleniti consequatur nobis blanditiis vitae sit qui. Dolores nisi accusamus beatae expedita nobis accusantium aut. Ut quis in repellat vel facere sequi.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(11, 'Ab culpa aut suscipit.', 'Tempore animi laudantium blanditiis quia. Recusandae magnam earum nulla earum et qui quo. Et modi minima enim ut repudiandae. Voluptates optio fuga sunt et recusandae cupiditate mollitia.\nOdio quae velit autem animi dolorem et sit doloremque. Molestiae doloribus illo sint reiciendis vel eveniet voluptatem hic. Adipisci aut nam aut harum. Libero eos at omnis ut nesciunt enim.\nVel laudantium possimus saepe fugiat. Provident totam aut in qui non. Dolores veniam consequatur dolorem consequuntur.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(12, 'Quae est distinctio.', 'Voluptas eum neque asperiores. Vel dolorem qui molestias molestiae.\nQui qui totam voluptas hic. Eveniet a quam sit et. Ipsam harum accusantium temporibus corporis. Aut quam quasi ut eum culpa aut.\nHic facilis sunt voluptatem quibusdam laudantium. Dolores repudiandae ut aspernatur repudiandae odit. Quo natus facilis nam in. Quisquam excepturi voluptas dolorem non non id nesciunt vel. Praesentium sequi unde aut quia voluptas aut ea.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(13, 'Reiciendis reprehenderit tenetur libero.', 'Facilis repellendus praesentium quia id. Vel voluptatem non voluptatibus. Consequatur nisi soluta illo sit. Totam quia non ipsa distinctio nulla et.\nVelit natus et velit. Facere reprehenderit laudantium rerum ea enim fugit et. Soluta rerum est ratione odio temporibus.\nSunt incidunt quibusdam modi voluptatem repellendus sed repellendus soluta. Delectus nobis nobis odio et. Sit rem quis saepe id in repellat quo.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(14, 'Occaecati quis nihil dolores.', 'Sit aut sed consequatur tenetur molestiae. Suscipit unde officia consequuntur ab suscipit tempore quia. Quisquam alias rem delectus reprehenderit.\nBlanditiis harum temporibus dolores non. Dicta impedit minima ut mollitia. Laudantium incidunt quaerat dolorem eum sit. Alias qui qui qui rerum sed enim ut.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(15, 'Rem ut officiis.', 'Eligendi harum ipsam qui fugiat deleniti et. Perferendis nesciunt illum voluptates tenetur vero sapiente quia. Vero dolorem dolorem delectus odit quasi explicabo repellendus. Atque sequi debitis perferendis et similique rerum. Suscipit eum voluptatem qui esse dolore.\nEveniet fugit et optio unde animi voluptate similique. Beatae voluptas numquam aut iste. Autem voluptatem accusamus sunt et. Corrupti voluptate nam aut laboriosam beatae.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(16, 'Quia sint et.', 'Et qui vel ipsum adipisci nostrum. Ad delectus et a nulla. Tenetur nulla officiis eius et omnis adipisci hic eum. Placeat aut ullam assumenda odit quos et autem.\nQui esse quo dicta id odit. Id voluptatum consequatur eum eum aut. Ut et reprehenderit eaque enim tenetur illum laboriosam. Eveniet harum est enim aut iure temporibus natus.\nOdit veniam veritatis ipsa qui. Id modi accusantium corporis et consectetur ipsam corrupti sit. Ipsa dolores nostrum non error.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(17, 'Et quod nobis harum.', 'Praesentium quibusdam tenetur in. Quam nam vitae est iure perferendis. Id rerum voluptatem consequuntur omnis voluptatem in. Voluptatem consequuntur blanditiis inventore.\nQuia delectus voluptatem officiis provident aut. Aut et ratione est facere dolor sapiente necessitatibus. Doloribus consequuntur eum et rerum.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(18, 'Consequuntur reprehenderit aut amet.', 'Eveniet harum pariatur repudiandae recusandae recusandae quia. Dolorem iste velit molestias asperiores qui voluptatum. Accusantium fuga aspernatur atque facilis.\nEt ratione et odio nostrum possimus. Excepturi excepturi ratione voluptatem quam hic et maxime. Aliquid qui quia corrupti libero ab accusantium.\nSuscipit possimus consectetur ipsa tenetur. Magni aut reprehenderit voluptas. Eos asperiores ut hic voluptas. Quasi impedit commodi ex voluptas ut.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(19, 'Amet cum officiis harum.', 'Facere ut ea porro quo quibusdam. Error et repellat sint aliquid ducimus iure odit. Non rerum reiciendis officia rerum. Tempora culpa est tempora perferendis ullam beatae animi eum.\nEnim voluptatem ut quia iure perferendis quo. Hic molestiae nulla tempore eligendi. Ex odit dignissimos alias dicta nulla dolorem quidem. Ea dolores ipsum cumque ut voluptatibus.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(20, 'Rerum animi id sit.', 'Quisquam similique ratione corrupti. Minima fuga architecto ab ex a ad nihil. Omnis delectus rem consequatur tenetur consequatur. Tempore maiores voluptatem praesentium omnis sapiente quam nisi quidem.\nAut nesciunt rerum reprehenderit consectetur eos provident. Praesentium doloremque harum modi porro. Consequatur sapiente exercitationem ea cupiditate ut minus.\nMinima non dignissimos blanditiis. Aut et reprehenderit inventore repellendus natus. Velit dolor soluta odit sed.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(21, 'Non enim.', 'Maiores itaque sit asperiores nihil. Placeat qui provident cumque quo architecto commodi. Sed quod voluptates omnis magnam. Accusantium quod velit ducimus sequi id.\nVel saepe voluptates saepe quia animi at. Praesentium voluptatem quis et qui ab. Ea optio nemo adipisci inventore ratione qui a.\nImpedit officia et deleniti est. Ab inventore tenetur expedita rerum iusto similique. Qui aliquid sit magni et dolor.', '/images/1.png', '2017-06-19 09:10:05', '2017-06-19 09:10:05'),
(22, 'Unde voluptatum est ratione pariatur.', 'Aspernatur dolorem eum modi ad. Quidem est exercitationem veniam sit qui excepturi. Est doloribus in rem ducimus. Aut eum sed quod dicta perferendis.\nMaiores illum sit consequatur rerum. Aspernatur fugit deserunt unde molestiae omnis dignissimos. Est in amet pariatur deleniti earum necessitatibus culpa.\nPorro ut facilis molestiae neque. Necessitatibus qui eos quo iste maxime quia. Magni rerum natus commodi totam est quia libero.', '/images/1.png', '2017-06-19 09:10:06', '2017-06-19 09:10:06'),
(23, 'Perferendis nisi iure.', 'Eos suscipit explicabo numquam id. Nisi maiores aut laborum blanditiis exercitationem sequi perspiciatis. Et et aut ipsum nemo molestiae repellat. Suscipit minima rerum quae adipisci fuga in iure.\nVoluptatem ex minima dolores molestiae delectus et et modi. Eos sapiente eligendi et fugit. Nam fugiat est dolorem ut nemo.\nMolestiae hic necessitatibus voluptas aliquid est. Fugit pariatur placeat ipsam ipsa odio.', '/images/1.png', '2017-06-19 09:10:06', '2017-06-19 09:10:06'),
(24, 'Sunt minima aut quos consequatur.', 'Similique ut debitis tenetur. Et ea ea perferendis et hic. Expedita a fugiat ut asperiores sed autem aut.\nEa ut eos nostrum sint repellat explicabo corporis. Molestiae et delectus temporibus deleniti quis et distinctio molestiae. Iste et assumenda expedita aut est aut excepturi.\nVelit odio voluptatum doloribus. Non omnis minima blanditiis non. Facilis voluptatem sunt necessitatibus animi sequi ducimus et. Ex deserunt odio quam alias natus. Et ut perferendis id qui ut.', '/images/1.png', '2017-06-19 09:10:06', '2017-06-19 09:10:06'),
(25, 'Maxime dolores unde.', 'Velit quo non enim et quibusdam sit asperiores iste. Consequatur voluptatum mollitia libero modi architecto eaque dignissimos dicta.\nSit sequi laudantium fuga commodi corporis tempora sit ducimus. Et animi officiis et in. Corrupti omnis quo est placeat aut tenetur laboriosam. Adipisci omnis aut quibusdam alias quas id.\nUt rerum aut odio voluptas. Qui ea omnis eveniet sint qui.', '/images/1.png', '2017-06-19 09:10:06', '2017-06-19 09:10:06'),
(26, 'Enim laborum cumque.', 'Atque neque quia magni distinctio inventore exercitationem. Odio ut quas quam porro et. Deleniti consectetur at vero cupiditate tempore. Magnam ut atque ullam in aspernatur quia omnis.\nFugit non repellat incidunt exercitationem sunt temporibus. Aut qui dolor sit non dolorem veritatis quae omnis. Et tenetur quibusdam nihil tempora enim fuga. Qui ea qui sunt harum.', '/images/1.png', '2017-06-19 09:10:06', '2017-06-19 09:10:06'),
(27, 'Sit facilis officiis.', 'Ad dolor numquam repellendus ut commodi. Aperiam placeat dolorum totam cum. Enim et sed molestiae blanditiis culpa.\nDolor et alias est inventore quisquam maxime. Id consequatur accusamus voluptas et quas reiciendis. Aut et non perspiciatis perspiciatis rem illo.\nA neque quo cum aperiam aut odio quis laborum. Qui et pariatur aspernatur illum pariatur velit. Nihil ea quo aperiam asperiores. Eos sed doloremque occaecati autem alias.', '/images/1.png', '2017-06-19 09:10:06', '2017-06-19 09:10:06'),
(28, 'Suscipit voluptatem quia.', 'Et et cumque molestiae est explicabo culpa. Rerum est fugiat temporibus. Veniam non quae aut omnis beatae et nam.\nVoluptatem mollitia odit facilis nulla sed. Id eaque ea enim ratione quia. Dolorum earum est vitae id provident voluptas est.\nOfficia eius possimus illum recusandae. Libero laborum rem sed eveniet. Et est voluptatem deleniti ad expedita occaecati.\nFuga quis voluptate voluptatum ea perferendis. Sint voluptas impedit tenetur et. Esse molestiae quod placeat voluptates officiis iusto.', '/images/1.png', '2017-06-19 09:10:06', '2017-06-19 09:10:06'),
(29, 'Ea sapiente voluptas enim.', 'Cupiditate eligendi eius iure ipsam et. Temporibus corporis aliquid porro itaque et libero. Ut harum et odit dolore dolor sit vero.\nVelit odit ipsam nisi perferendis aut. Vel modi nihil ratione vitae. Maiores tempore nesciunt odio in illum ea quibusdam.\nOdit dolore enim doloribus eius consequatur ut. Suscipit qui quo sed sed quia id. Nisi voluptates ea ut vel aperiam architecto. Libero rerum quia placeat eum non.', '/images/1.png', '2017-06-19 09:10:06', '2017-06-19 09:10:06'),
(30, 'Non in consequatur porro.', 'Voluptate ad alias sed. Assumenda corporis eveniet maiores quis iusto reiciendis. Voluptas aliquid molestiae aut eum aut. Neque ullam ducimus voluptatem ipsa sit illum.\nHic temporibus dolorem aut iure id optio veniam ducimus. Tempore quas repellendus sint rem necessitatibus qui qui aut. Eos quod nobis iusto.', '/images/1.png', '2017-06-19 09:10:06', '2017-06-19 09:10:06'),
(31, 'Illo nisi dolore accusantium.', 'Assumenda sint quae quia incidunt quaerat vero. Corrupti non libero dolorum nulla dolores eum.\nMaxime fugiat atque quaerat dignissimos nihil quia. Saepe quo itaque ipsa et. Aut perspiciatis culpa totam laudantium optio. Velit sit recusandae molestiae. Est velit ab quo quisquam reprehenderit magni et accusantium.', '/images/1.png', '2017-06-19 09:10:06', '2017-06-19 09:10:06'),
(32, 'Est tenetur consequatur.', 'Ut tempore ipsum consectetur nostrum nam quis eveniet. Maxime sunt tempora ab. Cupiditate id omnis et ipsa et perspiciatis facere.\nNihil repellat et esse omnis. Molestias vel iste minima et animi. Et sed quasi id ut nihil necessitatibus at. Aut cum consequatur dolorum quaerat et dolorum.\nEt necessitatibus sunt in. Molestiae itaque voluptas ea eius. Quia iusto repellat cumque velit. Non incidunt doloribus dolor.', '/images/1.png', '2017-06-19 09:10:06', '2017-06-19 09:10:06'),
(33, 'Suscipit necessitatibus et rerum ullam.', 'Eos minus aut cum quisquam blanditiis perferendis. Sit sed et dolores quis quasi consequuntur. Sunt ut quo cupiditate assumenda et. Animi libero aut dolore facere nihil dolor.\nPossimus minus doloremque dignissimos unde. Voluptatibus animi dolorem quos aliquid molestiae unde. Consequatur labore aut hic suscipit minus quidem occaecati laboriosam.\nEos vel fuga aliquid ipsa. Libero libero consequatur quia corporis. Corrupti nesciunt molestias est pariatur. Architecto sed ea animi repellat at.', '/images/1.png', '2017-06-19 09:10:06', '2017-06-19 09:10:06'),
(34, 'Qui provident dolores dolorem rem.', 'Atque assumenda et cupiditate dicta qui quos. Eos soluta minus delectus a et qui dignissimos. Sint facere aut voluptas aperiam aut. Porro odio sint qui cupiditate. Rerum ipsam iusto quis dicta et asperiores libero eum.\nCommodi fugit incidunt et officia. Omnis expedita mollitia praesentium architecto eaque aliquam accusamus. Est aperiam aliquid ipsa et a nostrum aliquid.\nDignissimos alias placeat omnis in. Aut totam eos sapiente numquam animi debitis quis. Animi est et soluta in.', '/images/1.png', '2017-06-19 09:10:06', '2017-06-19 09:10:06'),
(35, 'Omnis omnis aperiam fugiat.', 'Consequatur laborum exercitationem quae incidunt et. Minima corrupti aut et dolores cum et. Ipsam temporibus itaque distinctio cum. Culpa maiores aperiam dignissimos sit.\nFugiat quae qui odit dolor non corporis totam. Assumenda consequatur repellat facere explicabo omnis. Voluptatum alias voluptates sit sit.\nSapiente ut ipsam consequatur consequatur. Dolorem pariatur sint optio. Consequatur similique totam error numquam.', '/images/1.png', '2017-06-19 09:10:06', '2017-06-19 09:10:06'),
(36, 'Ab rerum sit quia.', 'Nisi et dolorum iure asperiores cupiditate voluptates quam. Maxime accusamus voluptas nihil voluptate molestias deserunt. Veniam ut debitis assumenda est incidunt aut. Eum nulla adipisci vero sint quia.\nAccusamus tempore qui odit quod sed nihil ipsam. Voluptas repellendus itaque quia ipsum non. Repellendus recusandae non voluptatibus ut neque alias. Necessitatibus velit ipsam doloribus iure.\nQui aut tempore aperiam ut. Unde omnis tenetur quo porro deleniti eos tempora.', '/images/1.png', '2017-06-19 09:10:06', '2017-06-19 09:10:06'),
(37, 'Eligendi id vel.', 'Nostrum eum voluptas vitae ut perspiciatis modi qui eius. Eius eos recusandae eveniet excepturi odio. Consequatur dolorem omnis odio veniam. Nulla ut amet exercitationem eius ut debitis omnis.\nEst commodi iusto sit mollitia labore quam. Minima maiores neque corrupti enim dolores. Dignissimos voluptatem et labore enim velit cupiditate. Recusandae consequatur expedita et cumque nihil.', '/images/1.png', '2017-06-19 09:10:06', '2017-06-19 09:10:06'),
(38, 'Libero consequatur omnis possimus.', 'Ipsam quae dignissimos quia qui rerum minima. Nihil et possimus minima molestias. Rerum consequatur veniam placeat minus ex voluptates temporibus. Et minus nemo unde fuga ratione quasi rerum. Voluptatum minus doloremque iste sit qui quibusdam veritatis.\nDebitis ut at soluta maxime. Iusto velit nobis et cupiditate alias voluptatem odit. Excepturi molestiae qui voluptatem. Qui eos quas nostrum quos qui. Saepe aliquam quo molestiae rerum consequuntur in.', '/images/1.png', '2017-06-19 09:10:06', '2017-06-19 09:10:06'),
(45, 'Ut necessitatib', 'Et dolores et ipsa nihil omnis amet vitae. Dolorem saepe nihil quia repellat. Dolores laboriosam est velit tenetur.\r\nConsequuntur vero exercitationem repellat aliquid aliquid. Non optio dolorem in praesentium laudantium alias. Praesentium magnam laboriosam qui non officia sint.\r\nIllum et quibusdam aspernatur fugit. Ipsum sint est in aspernatur quisquam non qui. Autem inventore voluptatem assumenda. Rerum et facere culpa at.', '45.jpg', '2017-06-19 09:10:06', '2017-06-21 05:58:26');

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
(56, 2),
(66, 2),
(98, 1),
(53, 4),
(45, 1),
(72, 2),
(65, 4),
(78, 2),
(2, 4),
(52, 3),
(11, 2),
(72, 4),
(51, 4),
(33, 3),
(49, 2),
(52, 2),
(57, 1),
(36, 3),
(66, 1),
(12, 2),
(25, 3),
(87, 1),
(68, 3),
(57, 1),
(26, 2),
(11, 1),
(63, 4),
(16, 3),
(39, 4),
(61, 3),
(71, 4),
(70, 4),
(97, 4),
(78, 1),
(31, 4),
(80, 3),
(20, 1),
(17, 2),
(54, 3),
(3, 2),
(94, 1),
(32, 2),
(56, 3),
(30, 2),
(22, 4),
(80, 4),
(93, 2),
(40, 1),
(17, 1),
(45, 3),
(91, 4),
(88, 1),
(74, 3),
(63, 3),
(38, 2),
(36, 4),
(99, 4),
(90, 1),
(65, 3),
(15, 4),
(49, 2),
(17, 4),
(93, 1),
(37, 3),
(34, 4),
(45, 1),
(49, 2),
(4, 3),
(64, 4),
(92, 2),
(63, 2),
(26, 1),
(44, 2),
(12, 2),
(30, 2),
(9, 3),
(53, 4),
(98, 2),
(64, 1),
(19, 3),
(49, 1),
(20, 4),
(55, 1),
(86, 2),
(13, 1),
(22, 4),
(8, 1),
(1, 2),
(4, 1),
(49, 1),
(63, 3),
(81, 3),
(22, 3),
(21, 4),
(99, 4),
(79, 2),
(85, 2),
(44, 4),
(21, 4),
(40, 2),
(22, 3);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `parent_id`, `name`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Thriller', NULL, NULL),
(2, NULL, 'Novel', NULL, '2017-06-21 05:58:38'),
(3, NULL, 'Fable', NULL, NULL),
(4, NULL, 'Drama', NULL, NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
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
