-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2025 at 12:27 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agri`
--

-- --------------------------------------------------------

--
-- Table structure for table `cash_assistance_events`
--

CREATE TABLE `cash_assistance_events` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `sponsor` varchar(191) DEFAULT NULL,
  `date` varchar(191) DEFAULT NULL,
  `location` varchar(191) DEFAULT NULL,
  `description` varchar(191) DEFAULT NULL,
  `livelihood` varchar(191) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cash_assistance_events`
--

INSERT INTO `cash_assistance_events` (`id`, `name`, `sponsor`, `date`, `location`, `description`, `livelihood`, `created_at`, `updated_at`) VALUES
(1, 'test', 'test', '2025-04-04T16:26', 'test', 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest', NULL, '2025-04-04 00:26:32', '2025-04-04 00:26:32');

-- --------------------------------------------------------

--
-- Table structure for table `cash_assistance_livelihoods`
--

CREATE TABLE `cash_assistance_livelihoods` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cash_assistance_livelihood_id` varchar(191) DEFAULT NULL,
  `name` varchar(191) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cash_assistance_livelihoods`
--

INSERT INTO `cash_assistance_livelihoods` (`id`, `cash_assistance_livelihood_id`, `name`, `created_at`, `updated_at`) VALUES
(1, '1', 'Farmer', '2025-04-04 00:26:32', '2025-04-04 00:26:32'),
(2, '1', 'Farmworker/Laborer', '2025-04-04 00:26:32', '2025-04-04 00:26:32'),
(3, '1', 'Fisherfolk', '2025-04-04 00:26:33', '2025-04-04 00:26:33');

-- --------------------------------------------------------

--
-- Table structure for table `enrollment_forms`
--

CREATE TABLE `enrollment_forms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `farm_profiles`
--

CREATE TABLE `farm_profiles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `register_id` varchar(191) DEFAULT NULL,
  `main_livelihood` varchar(191) DEFAULT NULL,
  `farm_activity` varchar(191) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `farm_profiles`
--

INSERT INTO `farm_profiles` (`id`, `register_id`, `main_livelihood`, `farm_activity`, `created_at`, `updated_at`) VALUES
(1, '4042025161756', 'Fisherfolk', 'Fishing Capture', '2025-04-04 00:17:57', '2025-04-04 00:17:57'),
(2, '4042025181841', 'Farmer', 'Rice', '2025-04-04 02:18:42', '2025-04-04 02:18:42'),
(3, '4042025181845', 'Farmer', 'Rice', '2025-04-04 02:18:45', '2025-04-04 02:18:45'),
(4, '4042025181848', 'Farmer', 'Rice', '2025-04-04 02:18:48', '2025-04-04 02:18:48'),
(5, '4042025181933', 'Farmer', 'Rice', '2025-04-04 02:19:33', '2025-04-04 02:19:33');

-- --------------------------------------------------------

--
-- Table structure for table `government_affiliations`
--

CREATE TABLE `government_affiliations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `register_id` varchar(191) DEFAULT NULL,
  `PWD` varchar(191) DEFAULT NULL,
  `4Ps` varchar(191) DEFAULT NULL,
  `indigenous_group` varchar(191) DEFAULT NULL,
  `indigenous_group_name` varchar(191) DEFAULT NULL,
  `government_id` varchar(191) DEFAULT NULL,
  `government_id_type` varchar(191) DEFAULT NULL,
  `government_id_number` varchar(191) DEFAULT NULL,
  `farmers_association` varchar(191) DEFAULT NULL,
  `farmers_association_name` varchar(191) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `government_affiliations`
--

INSERT INTO `government_affiliations` (`id`, `register_id`, `PWD`, `4Ps`, `indigenous_group`, `indigenous_group_name`, `government_id`, `government_id_type`, `government_id_number`, `farmers_association`, `farmers_association_name`, `created_at`, `updated_at`) VALUES
(1, '4042025161756', 'NO', 'NO', 'YES', 'test', 'YES', 'test', '123123', 'NO', NULL, '2025-04-04 00:17:57', '2025-04-04 00:17:57'),
(2, '4042025181841', 'NO', 'NO', 'NO', 'test', 'NO', 'test', '123123', 'NO', NULL, '2025-04-04 02:18:42', '2025-04-04 02:18:42'),
(3, '4042025181845', 'NO', 'NO', 'NO', 'test', 'NO', 'test', '123123', 'NO', NULL, '2025-04-04 02:18:45', '2025-04-04 02:18:45'),
(4, '4042025181848', 'NO', 'NO', 'NO', 'test', 'NO', 'test', '123123', 'NO', NULL, '2025-04-04 02:18:48', '2025-04-04 02:18:48'),
(5, '4042025181933', 'NO', 'NO', 'NO', 'test', 'NO', 'test', '123123', 'NO', NULL, '2025-04-04 02:19:33', '2025-04-04 02:19:33');

-- --------------------------------------------------------

--
-- Table structure for table `households`
--

CREATE TABLE `households` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `register_id` varchar(191) DEFAULT NULL,
  `household_head` varchar(191) DEFAULT NULL,
  `household_members` varchar(191) DEFAULT NULL,
  `household_head_name` varchar(191) DEFAULT NULL,
  `household_relation` varchar(191) DEFAULT NULL,
  `male_members` int(11) DEFAULT NULL,
  `female_members` int(11) DEFAULT NULL,
  `annual_income` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `households`
--

INSERT INTO `households` (`id`, `register_id`, `household_head`, `household_members`, `household_head_name`, `household_relation`, `male_members`, `female_members`, `annual_income`, `created_at`, `updated_at`) VALUES
(1, '4042025161756', 'NO', '4', 'test', 'test', 2, 2, 200000.00, '2025-04-04 00:17:57', '2025-04-04 00:17:57'),
(2, '4042025181841', 'YES', '4', NULL, NULL, 2, 2, 100000.00, '2025-04-04 02:18:42', '2025-04-04 02:18:42'),
(3, '4042025181845', 'YES', '4', NULL, NULL, 2, 2, 100000.00, '2025-04-04 02:18:45', '2025-04-04 02:18:45'),
(4, '4042025181848', 'YES', '4', NULL, NULL, 2, 2, 100000.00, '2025-04-04 02:18:48', '2025-04-04 02:18:48'),
(5, '4042025181933', 'YES', '4', NULL, NULL, 2, 2, 100000.00, '2025-04-04 02:19:33', '2025-04-04 02:19:33');

-- --------------------------------------------------------

--
-- Table structure for table `land_farmers`
--

CREATE TABLE `land_farmers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `register_id` varchar(191) DEFAULT NULL,
  `farmer_rotation_name` varchar(191) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `land_farmers`
--

INSERT INTO `land_farmers` (`id`, `register_id`, `farmer_rotation_name`, `created_at`, `updated_at`) VALUES
(1, '4042025161756', 'testtest', '2025-04-04 00:17:57', '2025-04-04 00:17:57'),
(2, '4042025161756', 'test', '2025-04-04 00:17:57', '2025-04-04 00:17:57');

-- --------------------------------------------------------

--
-- Table structure for table `l_g_u_profiles`
--

CREATE TABLE `l_g_u_profiles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `lgu_user_id` varchar(191) DEFAULT NULL,
  `address` varchar(191) DEFAULT NULL,
  `barangay` varchar(191) DEFAULT NULL,
  `brgy_code` varchar(191) DEFAULT NULL,
  `city` varchar(191) DEFAULT NULL,
  `city_code` varchar(191) DEFAULT NULL,
  `province` varchar(191) DEFAULT NULL,
  `province_code` varchar(191) DEFAULT NULL,
  `region` varchar(191) DEFAULT NULL,
  `region_code` varchar(191) DEFAULT NULL,
  `contact` varchar(191) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `municipal_agricultural_office` varchar(191) DEFAULT NULL,
  `logo` varchar(191) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `l_g_u_profiles`
--

INSERT INTO `l_g_u_profiles` (`id`, `lgu_user_id`, `address`, `barangay`, `brgy_code`, `city`, `city_code`, `province`, `province_code`, `region`, `region_code`, `contact`, `email`, `municipal_agricultural_office`, `logo`, `created_at`, `updated_at`) VALUES
(1, '1', 'undefined', 'Poblacion', '074624011', 'Vallehermoso', '074624', 'Negros Oriental', '0746', 'Region VII (Central Visayas)', '07', 'undefined', 'undefined', 'undefined', 'undefined', '2025-04-04 00:14:45', '2025-04-04 00:14:45');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(4, '2025_01_25_063445_create_enrollment_forms_table', 1),
(5, '2025_02_01_080558_create_personal_information_table', 1),
(6, '2025_02_01_080645_create_households_table', 1),
(7, '2025_02_01_080717_create_government_affiliations_table', 1),
(8, '2025_02_01_080732_create_farm_profiles_table', 1),
(9, '2025_02_01_080744_create_land_farmers_table', 1),
(10, '2025_02_01_080755_create_parcels_table', 1),
(11, '2025_02_01_080802_create_parcel_components_table', 1),
(12, '2025_02_01_080839_create_l_g_u_profiles_table', 1),
(13, '2025_02_01_080848_create_organizations_table', 1),
(14, '2025_02_08_022335_create_users_table', 1),
(15, '2025_02_08_050228_create_verifier_table', 1),
(16, '2025_03_10_142737_create_cash_assistance_events_table', 1),
(17, '2025_03_10_145213_create_cash_assistance_livelihoods_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `organizations`
--

CREATE TABLE `organizations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `organization_name` varchar(191) DEFAULT NULL,
  `status` enum('active','inactive') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `organizations`
--

INSERT INTO `organizations` (`id`, `organization_name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'test organization', 'active', '2025-04-04 00:24:39', '2025-04-04 00:24:39'),
(2, 'sample organization', 'active', '2025-04-04 00:24:48', '2025-04-04 00:24:48');

-- --------------------------------------------------------

--
-- Table structure for table `parcels`
--

CREATE TABLE `parcels` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `register_id` varchar(191) DEFAULT NULL,
  `farm_location` varchar(191) DEFAULT NULL,
  `farm_area` decimal(10,2) DEFAULT NULL,
  `ancestral_domain` varchar(191) DEFAULT NULL,
  `agrarian_beneficiary` varchar(191) DEFAULT NULL,
  `ownership_doc_number` varchar(191) DEFAULT NULL,
  `ownership_type` varchar(191) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `parcels`
--

INSERT INTO `parcels` (`id`, `register_id`, `farm_location`, `farm_area`, `ancestral_domain`, `agrarian_beneficiary`, `ownership_doc_number`, `ownership_type`, `created_at`, `updated_at`) VALUES
(1, '4042025161756', 'test', 111.00, 'YES', 'YES', '123131', 'regowner', '2025-04-04 00:17:57', '2025-04-04 00:17:57');

-- --------------------------------------------------------

--
-- Table structure for table `parcel_components`
--

CREATE TABLE `parcel_components` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `register_id` varchar(191) DEFAULT NULL,
  `parcel_id` bigint(20) UNSIGNED DEFAULT NULL,
  `commodity` varchar(191) DEFAULT NULL,
  `size` decimal(10,2) DEFAULT NULL,
  `number_heads` int(11) DEFAULT NULL,
  `farm_type` varchar(191) DEFAULT NULL,
  `organic_practioner` varchar(191) DEFAULT NULL,
  `remarks` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `parcel_components`
--

INSERT INTO `parcel_components` (`id`, `register_id`, `parcel_id`, `commodity`, `size`, `number_heads`, `farm_type`, `organic_practioner`, `remarks`, `created_at`, `updated_at`) VALUES
(1, '4042025161756', 1, 'test', 1111.00, NULL, 'Irrigated', 'YES', 'test', '2025-04-04 00:17:57', '2025-04-04 00:17:57'),
(2, '4042025161756', 1, 'testtest', 1111.00, 2, 'Rainfed Lowland', 'NO', 'testtest', '2025-04-04 00:17:57', '2025-04-04 00:17:57');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_information`
--

CREATE TABLE `personal_information` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `rsbsa_id` varchar(191) DEFAULT NULL,
  `register_id` varchar(191) DEFAULT NULL,
  `firstname` varchar(191) DEFAULT NULL,
  `middlename` varchar(191) DEFAULT NULL,
  `lastname` varchar(191) DEFAULT NULL,
  `suffix` varchar(191) DEFAULT NULL,
  `mothers_maiden` varchar(191) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `pob` varchar(191) DEFAULT NULL,
  `religion` varchar(191) DEFAULT NULL,
  `gender` enum('male','female','other') DEFAULT NULL,
  `civil` enum('single','married','widowed','separated','divorced') DEFAULT NULL,
  `mobile` varchar(191) DEFAULT NULL,
  `landline` varchar(191) DEFAULT NULL,
  `contact_person` varchar(191) DEFAULT NULL,
  `contact_person_mobile` varchar(191) DEFAULT NULL,
  `street_address` varchar(191) DEFAULT NULL,
  `street_address_2` varchar(191) DEFAULT NULL,
  `barangay` varchar(191) DEFAULT NULL,
  `city` varchar(191) DEFAULT NULL,
  `province` varchar(191) DEFAULT NULL,
  `region` varchar(191) DEFAULT NULL,
  `highest_education` varchar(191) DEFAULT NULL,
  `status` varchar(191) DEFAULT NULL,
  `avatar` varchar(191) DEFAULT NULL,
  `verifier` varchar(191) DEFAULT NULL,
  `register_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_information`
--

INSERT INTO `personal_information` (`id`, `rsbsa_id`, `register_id`, `firstname`, `middlename`, `lastname`, `suffix`, `mothers_maiden`, `dob`, `pob`, `religion`, `gender`, `civil`, `mobile`, `landline`, `contact_person`, `contact_person_mobile`, `street_address`, `street_address_2`, `barangay`, `city`, `province`, `region`, `highest_education`, `status`, `avatar`, `verifier`, `register_date`, `created_at`, `updated_at`) VALUES
(1, NULL, '4042025161756', 'test', 'test', 'test', NULL, 'test', '1993-04-04', 'test', 'test', 'male', 'single', '1231', '12312312', 'test', '1231231', 'test', 'test', 'Bagawines', 'Vallehermoso', 'Negros Oriental', 'Region VII (Central Visayas)', 'College', 'active', NULL, NULL, NULL, '2025-04-04 00:17:56', '2025-04-04 00:25:45'),
(2, NULL, '4042025181841', 'Test', 'Test', 'Test1', 'Jr', 'TESTER', '2002-04-01', 'Vallehermoso', 'Test', 'male', 'single', '456464657', '1216755', 'Test1', 'test', 'test', 'test', NULL, 'Vallehermoso', 'Negros Oriental', 'Region VII (Central Visayas)', 'Post-graduate', 'pending', NULL, NULL, NULL, '2025-04-04 02:18:42', '2025-04-04 02:18:42'),
(3, NULL, '4042025181845', 'Test', 'Test', 'Test1', 'Jr', 'TESTER', '2002-04-01', 'Vallehermoso', 'Test', 'male', 'single', '456464657', '1216755', 'Test1', 'test', 'test', 'test', NULL, 'Vallehermoso', 'Negros Oriental', 'Region VII (Central Visayas)', 'Post-graduate', 'pending', NULL, NULL, NULL, '2025-04-04 02:18:45', '2025-04-04 02:18:45'),
(4, NULL, '4042025181848', 'Test', 'Test', 'Test1', 'Jr', 'TESTER', '2002-04-01', 'Vallehermoso', 'Test', 'male', 'single', '456464657', '1216755', 'Test1', 'test', 'test', 'test', NULL, 'Vallehermoso', 'Negros Oriental', 'Region VII (Central Visayas)', 'Post-graduate', 'pending', NULL, NULL, NULL, '2025-04-04 02:18:48', '2025-04-04 02:18:48'),
(5, NULL, '4042025181933', 'Test', 'Test', 'Test1', 'Jr', 'TESTER', '2002-04-01', 'Vallehermoso', 'Test', 'male', 'single', '456464657', '1216755', 'Test1', 'test', 'test', 'test', 'Macapso', 'Vallehermoso', 'Negros Oriental', 'Region VII (Central Visayas)', 'Post-graduate', 'pending', NULL, NULL, NULL, '2025-04-04 02:19:33', '2025-04-04 02:19:33');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `firstname` varchar(191) DEFAULT NULL,
  `middlename` varchar(191) DEFAULT NULL,
  `lastname` varchar(191) DEFAULT NULL,
  `suffix` varchar(191) DEFAULT NULL,
  `role` varchar(191) DEFAULT NULL,
  `brgy` varchar(191) DEFAULT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) DEFAULT NULL,
  `status` varchar(191) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `middlename`, `lastname`, `suffix`, `role`, `brgy`, `email`, `password`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Administrator', NULL, NULL, NULL, 'Admin', NULL, 'admin@gmail.com', '$2y$12$zNc1OA5Knf3S8844f0FIkechOs80BvS4d.mjQOAplTHzhlGhLn.3q', NULL, '2025-04-04 00:13:02', '2025-04-04 00:27:32'),
(2, 'test', NULL, 'verifier', NULL, 'Verifier', 'Bagawines', 'verifier@me.com', '$2y$12$catUU0D3JjPy4IWV8JXyxOJYucz5C.SP0Db3ChxNpvr6ewEHxh0o6', 'Active', '2025-04-04 00:24:28', '2025-04-04 00:24:28'),
(3, 'Juan', 'TAmad', '[Gwapo]', '[jr]', '[admin]', '[Brgy Puan]', 'Vhermoso2025@gmail.com', 'admin123', '[active]', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `verifier`
--

CREATE TABLE `verifier` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `firstname` varchar(191) DEFAULT NULL,
  `middlename` varchar(191) DEFAULT NULL,
  `lastname` varchar(191) DEFAULT NULL,
  `suffix` varchar(191) DEFAULT NULL,
  `role` varchar(191) DEFAULT NULL,
  `brgy` varchar(191) DEFAULT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) DEFAULT NULL,
  `status` varchar(191) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cash_assistance_events`
--
ALTER TABLE `cash_assistance_events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cash_assistance_livelihoods`
--
ALTER TABLE `cash_assistance_livelihoods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enrollment_forms`
--
ALTER TABLE `enrollment_forms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `farm_profiles`
--
ALTER TABLE `farm_profiles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `government_affiliations`
--
ALTER TABLE `government_affiliations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `government_affiliations_register_id_unique` (`register_id`);

--
-- Indexes for table `households`
--
ALTER TABLE `households`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `land_farmers`
--
ALTER TABLE `land_farmers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `l_g_u_profiles`
--
ALTER TABLE `l_g_u_profiles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `organizations`
--
ALTER TABLE `organizations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `parcels`
--
ALTER TABLE `parcels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `parcel_components`
--
ALTER TABLE `parcel_components`
  ADD PRIMARY KEY (`id`),
  ADD KEY `parcel_components_parcel_id_foreign` (`parcel_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `personal_information`
--
ALTER TABLE `personal_information`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `verifier`
--
ALTER TABLE `verifier`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `verifier_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cash_assistance_events`
--
ALTER TABLE `cash_assistance_events`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cash_assistance_livelihoods`
--
ALTER TABLE `cash_assistance_livelihoods`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `enrollment_forms`
--
ALTER TABLE `enrollment_forms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `farm_profiles`
--
ALTER TABLE `farm_profiles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `government_affiliations`
--
ALTER TABLE `government_affiliations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `households`
--
ALTER TABLE `households`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `land_farmers`
--
ALTER TABLE `land_farmers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `l_g_u_profiles`
--
ALTER TABLE `l_g_u_profiles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `organizations`
--
ALTER TABLE `organizations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `parcels`
--
ALTER TABLE `parcels`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `parcel_components`
--
ALTER TABLE `parcel_components`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_information`
--
ALTER TABLE `personal_information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `verifier`
--
ALTER TABLE `verifier`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `parcel_components`
--
ALTER TABLE `parcel_components`
  ADD CONSTRAINT `parcel_components_parcel_id_foreign` FOREIGN KEY (`parcel_id`) REFERENCES `parcels` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
