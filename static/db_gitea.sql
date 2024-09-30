-- MySQL dump 10.13  Distrib 5.7.34, for Linux (x86_64)
--
-- Host: localhost    Database: gitea
-- ------------------------------------------------------
-- Server version	5.7.34-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `access`
--

DROP TABLE IF EXISTS `access`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `access` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `mode` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_access_s` (`user_id`,`repo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `access`
--

LOCK TABLES `access` WRITE;
/*!40000 ALTER TABLE `access` DISABLE KEYS */;
/*!40000 ALTER TABLE `access` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `access_token`
--

DROP TABLE IF EXISTS `access_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `access_token` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `token_hash` varchar(255) DEFAULT NULL,
  `token_salt` varchar(255) DEFAULT NULL,
  `token_last_eight` varchar(255) DEFAULT NULL,
  `scope` varchar(255) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_access_token_token_hash` (`token_hash`),
  KEY `IDX_access_token_updated_unix` (`updated_unix`),
  KEY `IDX_access_token_uid` (`uid`),
  KEY `IDX_access_token_token_last_eight` (`token_last_eight`),
  KEY `IDX_access_token_created_unix` (`created_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `access_token`
--

LOCK TABLES `access_token` WRITE;
/*!40000 ALTER TABLE `access_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `access_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `action`
--

DROP TABLE IF EXISTS `action`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `action` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `op_type` int(11) DEFAULT NULL,
  `act_user_id` bigint(20) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `comment_id` bigint(20) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `ref_name` varchar(255) DEFAULT NULL,
  `is_private` tinyint(1) NOT NULL DEFAULT '0',
  `content` text,
  `created_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_action_au_r_c_u_d` (`act_user_id`,`repo_id`,`created_unix`,`user_id`,`is_deleted`),
  KEY `IDX_action_r_u_d` (`repo_id`,`user_id`,`is_deleted`),
  KEY `IDX_action_c_u_d` (`created_unix`,`user_id`,`is_deleted`),
  KEY `IDX_action_user_id` (`user_id`),
  KEY `IDX_action_comment_id` (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action`
--

LOCK TABLES `action` WRITE;
/*!40000 ALTER TABLE `action` DISABLE KEYS */;
INSERT INTO `action` VALUES (14,1,1,1,4,0,0,'',0,'',1727159728),(15,1,5,1,4,0,0,'refs/heads/main',0,'',1727160158),(16,1,5,1,4,0,0,'refs/heads/main',0,'{\"Commits\":[{\"Sha1\":\"635334a061ffd226aa1c6896afb12fae0321bd6d\",\"Message\":\"feat: [KAN-99] #comment ✅ 글로벌 컨피그 도입 - 24.09.24 #close #time 1h +review SR @313devops\\n\\n추신 : 맨앞에 붙일 수 있는 구분\\n•fix : Bug 류 처리 시 ( patch version up )\\n•feat : 신규 기능 류 처리 시 ( minor version up )\\n•perf : 메이저 기능 류 처리 시 ( major version up )\\n\\n코드리뷰는 코드를 통해 소통하고, 서로의 경험을 통해 배우면서 성장 할 수 있는 기회입니다.\\n나를 위해, 나의 동료를 위해, 우리 팀을 위해 리뷰 시간을 사용해 주세요.\\n•너무 많은 코드를 한꺼번에 리뷰하지 마세요.\\n•최소한의 설명과 함께 중점적으로 봐야 할 곳을 알려 주세요.\\n•리뷰 후 Comment를 남겨 주세요.\\n•리뷰는 빠른 시간에 응답해 주세요.\\n•지적 보다는 대안을 제시해 주세요.\\n\\n[ Global-Config::Java-Service-Tree-Framework(JSTF)::313DEVGRP ]\\n\\n[Requirement Manage] http://www.a-rms.net\\n[Document] http://www.313.co.kr/confluence\\n[IssueTracker] http://www.313.co.kr/jira\\n[GitLab] http://www.313.co.kr/gitlab\\n[Redmine] http://www.313.co.kr:3000/\\n\\n[VersionControl] https://github.com/313devgrp\\n[CodeReview] http://www.313.co.kr/fecru\\n[CICD-Deploy] http://www.313.co.kr/jenkins\\n[BuildManager] http://www.313.co.kr/spinnaker\\n[ArtifactManager] http://www.313.co.kr/nexus\\n[CodeAnalysis] http://www.313.co.kr/sonar\\n\\n[Docker Hub] https://hub.docker.com/u/313devgrp\\n[Kubernetes] http://www.313.co.kr:31380\\n[DockerSwarm] http://www.313.co.kr/portainer/#!/auth\\n\\n[DB Admin] http://www.313.co.kr/phpmyadmin/\\n[S3 Admin] http://www.313.co.kr/minio/login\\n[MEM Admin] http://www.313.co.kr/redis/\\n[NoSql Index] http://www.313.co.kr/elasticsearch/_cat/indices\\n[NoSql Node] http://www.313.co.kr/elasticsearch/_nodes?pretty=true\\n[Kibana] http://www.313.co.kr/kibana/app/home#/\\n[LogStash] http://www.313.co.kr/logstash/_node/stats?pretty\\n[ZipKin] http://www.313.co.kr/zipkin/\\n[ElasticHQ] http://www.313.co.kr/elastichq/#!/\\n[Grafana] http://www.313.co.kr/grafana\\n[Kafka] http://www.313.co.kr/kafka\\n\\n[NAS] http://www.313.co.kr:5000/webman/index.cgi\\n[Mail] http://www.313.co.kr/mail/\\n[Auth] http://www.313.co.kr/auth/\\n[RDP] http://www.313.co.kr/guacamole/#/\\n[DrawIO] http://www.313.co.kr/drawio\\n[DrawDB] http://www.313.co.kr/drawdb\\n\",\"AuthorEmail\":\"dmswlsl@0203\",\"AuthorName\":\"313cokr@gmail.com\",\"CommitterEmail\":\"dmswlsl@0203\",\"CommitterName\":\"313cokr@gmail.com\",\"Timestamp\":\"2024-09-24T15:42:27+09:00\"}],\"HeadCommit\":{\"Sha1\":\"635334a061ffd226aa1c6896afb12fae0321bd6d\",\"Message\":\"feat: [KAN-99] #comment ✅ 글로벌 컨피그 도입 - 24.09.24 #close #time 1h +review SR @313devops\\n\\n추신 : 맨앞에 붙일 수 있는 구분\\n•fix : Bug 류 처리 시 ( patch version up )\\n•feat : 신규 기능 류 처리 시 ( minor version up )\\n•perf : 메이저 기능 류 처리 시 ( major version up )\\n\\n코드리뷰는 코드를 통해 소통하고, 서로의 경험을 통해 배우면서 성장 할 수 있는 기회입니다.\\n나를 위해, 나의 동료를 위해, 우리 팀을 위해 리뷰 시간을 사용해 주세요.\\n•너무 많은 코드를 한꺼번에 리뷰하지 마세요.\\n•최소한의 설명과 함께 중점적으로 봐야 할 곳을 알려 주세요.\\n•리뷰 후 Comment를 남겨 주세요.\\n•리뷰는 빠른 시간에 응답해 주세요.\\n•지적 보다는 대안을 제시해 주세요.\\n\\n[ Global-Config::Java-Service-Tree-Framework(JSTF)::313DEVGRP ]\\n\\n[Requirement Manage] http://www.a-rms.net\\n[Document] http://www.313.co.kr/confluence\\n[IssueTracker] http://www.313.co.kr/jira\\n[GitLab] http://www.313.co.kr/gitlab\\n[Redmine] http://www.313.co.kr:3000/\\n\\n[VersionControl] https://github.com/313devgrp\\n[CodeReview] http://www.313.co.kr/fecru\\n[CICD-Deploy] http://www.313.co.kr/jenkins\\n[BuildManager] http://www.313.co.kr/spinnaker\\n[ArtifactManager] http://www.313.co.kr/nexus\\n[CodeAnalysis] http://www.313.co.kr/sonar\\n\\n[Docker Hub] https://hub.docker.com/u/313devgrp\\n[Kubernetes] http://www.313.co.kr:31380\\n[DockerSwarm] http://www.313.co.kr/portainer/#!/auth\\n\\n[DB Admin] http://www.313.co.kr/phpmyadmin/\\n[S3 Admin] http://www.313.co.kr/minio/login\\n[MEM Admin] http://www.313.co.kr/redis/\\n[NoSql Index] http://www.313.co.kr/elasticsearch/_cat/indices\\n[NoSql Node] http://www.313.co.kr/elasticsearch/_nodes?pretty=true\\n[Kibana] http://www.313.co.kr/kibana/app/home#/\\n[LogStash] http://www.313.co.kr/logstash/_node/stats?pretty\\n[ZipKin] http://www.313.co.kr/zipkin/\\n[ElasticHQ] http://www.313.co.kr/elastichq/#!/\\n[Grafana] http://www.313.co.kr/grafana\\n[Kafka] http://www.313.co.kr/kafka\\n\\n[NAS] http://www.313.co.kr:5000/webman/index.cgi\\n[Mail] http://www.313.co.kr/mail/\\n[Auth] http://www.313.co.kr/auth/\\n[RDP] http://www.313.co.kr/guacamole/#/\\n[DrawIO] http://www.313.co.kr/drawio\\n[DrawDB] http://www.313.co.kr/drawdb\\n\",\"AuthorEmail\":\"dmswlsl@0203\",\"AuthorName\":\"313cokr@gmail.com\",\"CommitterEmail\":\"dmswlsl@0203\",\"CommitterName\":\"313cokr@gmail.com\",\"Timestamp\":\"2024-09-24T15:42:27+09:00\"},\"CompareURL\":\"\",\"Len\":1}',1727160159),(17,1,5,1,4,0,0,'refs/heads/main',0,'{\"Commits\":[{\"Sha1\":\"955e380e134f8172faade017ed39e44ec79a882d\",\"Message\":\"feat: [KAN-99] #comment ✅ 글로벌 컨피그 도입 완료 - 24.09.24 #close #time 1h +review SR @313devops\\n\\n추신 : 맨앞에 붙일 수 있는 구분\\n•fix : Bug 류 처리 시 ( patch version up )\\n•feat : 신규 기능 류 처리 시 ( minor version up )\\n•perf : 메이저 기능 류 처리 시 ( major version up )\\n\\n코드리뷰는 코드를 통해 소통하고, 서로의 경험을 통해 배우면서 성장 할 수 있는 기회입니다.\\n나를 위해, 나의 동료를 위해, 우리 팀을 위해 리뷰 시간을 사용해 주세요.\\n•너무 많은 코드를 한꺼번에 리뷰하지 마세요.\\n•최소한의 설명과 함께 중점적으로 봐야 할 곳을 알려 주세요.\\n•리뷰 후 Comment를 남겨 주세요.\\n•리뷰는 빠른 시간에 응답해 주세요.\\n•지적 보다는 대안을 제시해 주세요.\\n\\n[ Global-Config::Java-Service-Tree-Framework(JSTF)::313DEVGRP ]\\n\\n[Requirement Manage] http://www.a-rms.net\\n[Document] http://www.313.co.kr/confluence\\n[IssueTracker] http://www.313.co.kr/jira\\n[GitLab] http://www.313.co.kr/gitlab\\n[Redmine] http://www.313.co.kr:3000/\\n\\n[VersionControl] https://github.com/313devgrp\\n[CodeReview] http://www.313.co.kr/fecru\\n[CICD-Deploy] http://www.313.co.kr/jenkins\\n[BuildManager] http://www.313.co.kr/spinnaker\\n[ArtifactManager] http://www.313.co.kr/nexus\\n[CodeAnalysis] http://www.313.co.kr/sonar\\n\\n[Docker Hub] https://hub.docker.com/u/313devgrp\\n[Kubernetes] http://www.313.co.kr:31380\\n[DockerSwarm] http://www.313.co.kr/portainer/#!/auth\\n\\n[DB Admin] http://www.313.co.kr/phpmyadmin/\\n[S3 Admin] http://www.313.co.kr/minio/login\\n[MEM Admin] http://www.313.co.kr/redis/\\n[NoSql Index] http://www.313.co.kr/elasticsearch/_cat/indices\\n[NoSql Node] http://www.313.co.kr/elasticsearch/_nodes?pretty=true\\n[Kibana] http://www.313.co.kr/kibana/app/home#/\\n[LogStash] http://www.313.co.kr/logstash/_node/stats?pretty\\n[ZipKin] http://www.313.co.kr/zipkin/\\n[ElasticHQ] http://www.313.co.kr/elastichq/#!/\\n[Grafana] http://www.313.co.kr/grafana\\n[Kafka] http://www.313.co.kr/kafka\\n\\n[NAS] http://www.313.co.kr:5000/webman/index.cgi\\n[Mail] http://www.313.co.kr/mail/\\n[Auth] http://www.313.co.kr/auth/\\n[RDP] http://www.313.co.kr/guacamole/#/\\n[DrawIO] http://www.313.co.kr/drawio\\n[DrawDB] http://www.313.co.kr/drawdb\\n\",\"AuthorEmail\":\"dmswlsl@0203\",\"AuthorName\":\"313cokr@gmail.com\",\"CommitterEmail\":\"dmswlsl@0203\",\"CommitterName\":\"313cokr@gmail.com\",\"Timestamp\":\"2024-09-24T20:37:22+09:00\"}],\"HeadCommit\":{\"Sha1\":\"955e380e134f8172faade017ed39e44ec79a882d\",\"Message\":\"feat: [KAN-99] #comment ✅ 글로벌 컨피그 도입 완료 - 24.09.24 #close #time 1h +review SR @313devops\\n\\n추신 : 맨앞에 붙일 수 있는 구분\\n•fix : Bug 류 처리 시 ( patch version up )\\n•feat : 신규 기능 류 처리 시 ( minor version up )\\n•perf : 메이저 기능 류 처리 시 ( major version up )\\n\\n코드리뷰는 코드를 통해 소통하고, 서로의 경험을 통해 배우면서 성장 할 수 있는 기회입니다.\\n나를 위해, 나의 동료를 위해, 우리 팀을 위해 리뷰 시간을 사용해 주세요.\\n•너무 많은 코드를 한꺼번에 리뷰하지 마세요.\\n•최소한의 설명과 함께 중점적으로 봐야 할 곳을 알려 주세요.\\n•리뷰 후 Comment를 남겨 주세요.\\n•리뷰는 빠른 시간에 응답해 주세요.\\n•지적 보다는 대안을 제시해 주세요.\\n\\n[ Global-Config::Java-Service-Tree-Framework(JSTF)::313DEVGRP ]\\n\\n[Requirement Manage] http://www.a-rms.net\\n[Document] http://www.313.co.kr/confluence\\n[IssueTracker] http://www.313.co.kr/jira\\n[GitLab] http://www.313.co.kr/gitlab\\n[Redmine] http://www.313.co.kr:3000/\\n\\n[VersionControl] https://github.com/313devgrp\\n[CodeReview] http://www.313.co.kr/fecru\\n[CICD-Deploy] http://www.313.co.kr/jenkins\\n[BuildManager] http://www.313.co.kr/spinnaker\\n[ArtifactManager] http://www.313.co.kr/nexus\\n[CodeAnalysis] http://www.313.co.kr/sonar\\n\\n[Docker Hub] https://hub.docker.com/u/313devgrp\\n[Kubernetes] http://www.313.co.kr:31380\\n[DockerSwarm] http://www.313.co.kr/portainer/#!/auth\\n\\n[DB Admin] http://www.313.co.kr/phpmyadmin/\\n[S3 Admin] http://www.313.co.kr/minio/login\\n[MEM Admin] http://www.313.co.kr/redis/\\n[NoSql Index] http://www.313.co.kr/elasticsearch/_cat/indices\\n[NoSql Node] http://www.313.co.kr/elasticsearch/_nodes?pretty=true\\n[Kibana] http://www.313.co.kr/kibana/app/home#/\\n[LogStash] http://www.313.co.kr/logstash/_node/stats?pretty\\n[ZipKin] http://www.313.co.kr/zipkin/\\n[ElasticHQ] http://www.313.co.kr/elastichq/#!/\\n[Grafana] http://www.313.co.kr/grafana\\n[Kafka] http://www.313.co.kr/kafka\\n\\n[NAS] http://www.313.co.kr:5000/webman/index.cgi\\n[Mail] http://www.313.co.kr/mail/\\n[Auth] http://www.313.co.kr/auth/\\n[RDP] http://www.313.co.kr/guacamole/#/\\n[DrawIO] http://www.313.co.kr/drawio\\n[DrawDB] http://www.313.co.kr/drawdb\\n\",\"AuthorEmail\":\"dmswlsl@0203\",\"AuthorName\":\"313cokr@gmail.com\",\"CommitterEmail\":\"dmswlsl@0203\",\"CommitterName\":\"313cokr@gmail.com\",\"Timestamp\":\"2024-09-24T20:37:22+09:00\"},\"CompareURL\":\"root/ARMS/compare/635334a061ffd226aa1c6896afb12fae0321bd6d...955e380e134f8172faade017ed39e44ec79a882d\",\"Len\":1}',1727177854);
/*!40000 ALTER TABLE `action` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `action_artifact`
--

DROP TABLE IF EXISTS `action_artifact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `action_artifact` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `run_id` bigint(20) DEFAULT NULL,
  `runner_id` bigint(20) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `owner_id` bigint(20) DEFAULT NULL,
  `commit_sha` varchar(255) DEFAULT NULL,
  `storage_path` varchar(255) DEFAULT NULL,
  `file_size` bigint(20) DEFAULT NULL,
  `file_compressed_size` bigint(20) DEFAULT NULL,
  `content_encoding` varchar(255) DEFAULT NULL,
  `artifact_path` varchar(255) DEFAULT NULL,
  `artifact_name` varchar(255) DEFAULT NULL,
  `status` bigint(20) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  `expired_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_action_artifact_runid_name_path` (`run_id`,`artifact_path`,`artifact_name`),
  KEY `IDX_action_artifact_run_id` (`run_id`),
  KEY `IDX_action_artifact_repo_id` (`repo_id`),
  KEY `IDX_action_artifact_artifact_path` (`artifact_path`),
  KEY `IDX_action_artifact_artifact_name` (`artifact_name`),
  KEY `IDX_action_artifact_status` (`status`),
  KEY `IDX_action_artifact_updated_unix` (`updated_unix`),
  KEY `IDX_action_artifact_expired_unix` (`expired_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action_artifact`
--

LOCK TABLES `action_artifact` WRITE;
/*!40000 ALTER TABLE `action_artifact` DISABLE KEYS */;
/*!40000 ALTER TABLE `action_artifact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `action_run`
--

DROP TABLE IF EXISTS `action_run`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `action_run` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `owner_id` bigint(20) DEFAULT NULL,
  `workflow_id` varchar(255) DEFAULT NULL,
  `index` bigint(20) DEFAULT NULL,
  `trigger_user_id` bigint(20) DEFAULT NULL,
  `schedule_id` bigint(20) DEFAULT NULL,
  `ref` varchar(255) DEFAULT NULL,
  `commit_sha` varchar(255) DEFAULT NULL,
  `is_fork_pull_request` tinyint(1) DEFAULT NULL,
  `need_approval` tinyint(1) DEFAULT NULL,
  `approved_by` bigint(20) DEFAULT NULL,
  `event` varchar(255) DEFAULT NULL,
  `event_payload` longtext,
  `trigger_event` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT '0',
  `started` bigint(20) DEFAULT NULL,
  `stopped` bigint(20) DEFAULT NULL,
  `created` bigint(20) DEFAULT NULL,
  `updated` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_action_run_repo_index` (`repo_id`,`index`),
  KEY `IDX_action_run_status` (`status`),
  KEY `IDX_action_run_workflow_id` (`workflow_id`),
  KEY `IDX_action_run_index` (`index`),
  KEY `IDX_action_run_owner_id` (`owner_id`),
  KEY `IDX_action_run_trigger_user_id` (`trigger_user_id`),
  KEY `IDX_action_run_ref` (`ref`),
  KEY `IDX_action_run_approved_by` (`approved_by`),
  KEY `IDX_action_run_repo_id` (`repo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action_run`
--

LOCK TABLES `action_run` WRITE;
/*!40000 ALTER TABLE `action_run` DISABLE KEYS */;
/*!40000 ALTER TABLE `action_run` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `action_run_index`
--

DROP TABLE IF EXISTS `action_run_index`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `action_run_index` (
  `group_id` bigint(20) NOT NULL,
  `max_index` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`group_id`),
  KEY `IDX_action_run_index_max_index` (`max_index`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action_run_index`
--

LOCK TABLES `action_run_index` WRITE;
/*!40000 ALTER TABLE `action_run_index` DISABLE KEYS */;
/*!40000 ALTER TABLE `action_run_index` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `action_run_job`
--

DROP TABLE IF EXISTS `action_run_job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `action_run_job` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `run_id` bigint(20) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `owner_id` bigint(20) DEFAULT NULL,
  `commit_sha` varchar(255) DEFAULT NULL,
  `is_fork_pull_request` tinyint(1) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `attempt` bigint(20) DEFAULT NULL,
  `workflow_payload` blob,
  `job_id` varchar(255) DEFAULT NULL,
  `needs` text,
  `runs_on` text,
  `task_id` bigint(20) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `started` bigint(20) DEFAULT NULL,
  `stopped` bigint(20) DEFAULT NULL,
  `created` bigint(20) DEFAULT NULL,
  `updated` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_action_run_job_run_id` (`run_id`),
  KEY `IDX_action_run_job_repo_id` (`repo_id`),
  KEY `IDX_action_run_job_owner_id` (`owner_id`),
  KEY `IDX_action_run_job_commit_sha` (`commit_sha`),
  KEY `IDX_action_run_job_status` (`status`),
  KEY `IDX_action_run_job_updated` (`updated`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action_run_job`
--

LOCK TABLES `action_run_job` WRITE;
/*!40000 ALTER TABLE `action_run_job` DISABLE KEYS */;
/*!40000 ALTER TABLE `action_run_job` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `action_runner`
--

DROP TABLE IF EXISTS `action_runner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `action_runner` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uuid` char(36) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `version` varchar(64) DEFAULT NULL,
  `owner_id` bigint(20) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `description` text,
  `base` int(11) DEFAULT NULL,
  `repo_range` varchar(255) DEFAULT NULL,
  `token_hash` varchar(255) DEFAULT NULL,
  `token_salt` varchar(255) DEFAULT NULL,
  `last_online` bigint(20) DEFAULT NULL,
  `last_active` bigint(20) DEFAULT NULL,
  `agent_labels` text,
  `created` bigint(20) DEFAULT NULL,
  `updated` bigint(20) DEFAULT NULL,
  `deleted` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_action_runner_uuid` (`uuid`),
  UNIQUE KEY `UQE_action_runner_token_hash` (`token_hash`),
  KEY `IDX_action_runner_owner_id` (`owner_id`),
  KEY `IDX_action_runner_repo_id` (`repo_id`),
  KEY `IDX_action_runner_last_online` (`last_online`),
  KEY `IDX_action_runner_last_active` (`last_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action_runner`
--

LOCK TABLES `action_runner` WRITE;
/*!40000 ALTER TABLE `action_runner` DISABLE KEYS */;
/*!40000 ALTER TABLE `action_runner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `action_runner_token`
--

DROP TABLE IF EXISTS `action_runner_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `action_runner_token` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) DEFAULT NULL,
  `owner_id` bigint(20) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created` bigint(20) DEFAULT NULL,
  `updated` bigint(20) DEFAULT NULL,
  `deleted` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_action_runner_token_token` (`token`),
  KEY `IDX_action_runner_token_owner_id` (`owner_id`),
  KEY `IDX_action_runner_token_repo_id` (`repo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action_runner_token`
--

LOCK TABLES `action_runner_token` WRITE;
/*!40000 ALTER TABLE `action_runner_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `action_runner_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `action_schedule`
--

DROP TABLE IF EXISTS `action_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `action_schedule` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `specs` text,
  `repo_id` bigint(20) DEFAULT NULL,
  `owner_id` bigint(20) DEFAULT NULL,
  `workflow_id` varchar(255) DEFAULT NULL,
  `trigger_user_id` bigint(20) DEFAULT NULL,
  `ref` varchar(255) DEFAULT NULL,
  `commit_sha` varchar(255) DEFAULT NULL,
  `event` varchar(255) DEFAULT NULL,
  `event_payload` longtext,
  `content` blob,
  `created` bigint(20) DEFAULT NULL,
  `updated` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_action_schedule_repo_id` (`repo_id`),
  KEY `IDX_action_schedule_owner_id` (`owner_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action_schedule`
--

LOCK TABLES `action_schedule` WRITE;
/*!40000 ALTER TABLE `action_schedule` DISABLE KEYS */;
/*!40000 ALTER TABLE `action_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `action_schedule_spec`
--

DROP TABLE IF EXISTS `action_schedule_spec`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `action_schedule_spec` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) DEFAULT NULL,
  `schedule_id` bigint(20) DEFAULT NULL,
  `next` bigint(20) DEFAULT NULL,
  `prev` bigint(20) DEFAULT NULL,
  `spec` varchar(255) DEFAULT NULL,
  `created` bigint(20) DEFAULT NULL,
  `updated` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_action_schedule_spec_repo_id` (`repo_id`),
  KEY `IDX_action_schedule_spec_schedule_id` (`schedule_id`),
  KEY `IDX_action_schedule_spec_next` (`next`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action_schedule_spec`
--

LOCK TABLES `action_schedule_spec` WRITE;
/*!40000 ALTER TABLE `action_schedule_spec` DISABLE KEYS */;
/*!40000 ALTER TABLE `action_schedule_spec` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `action_task`
--

DROP TABLE IF EXISTS `action_task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `action_task` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `job_id` bigint(20) DEFAULT NULL,
  `attempt` bigint(20) DEFAULT NULL,
  `runner_id` bigint(20) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `started` bigint(20) DEFAULT NULL,
  `stopped` bigint(20) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `owner_id` bigint(20) DEFAULT NULL,
  `commit_sha` varchar(255) DEFAULT NULL,
  `is_fork_pull_request` tinyint(1) DEFAULT NULL,
  `token_hash` varchar(255) DEFAULT NULL,
  `token_salt` varchar(255) DEFAULT NULL,
  `token_last_eight` varchar(255) DEFAULT NULL,
  `log_filename` varchar(255) DEFAULT NULL,
  `log_in_storage` tinyint(1) DEFAULT NULL,
  `log_length` bigint(20) DEFAULT NULL,
  `log_size` bigint(20) DEFAULT NULL,
  `log_indexes` longblob,
  `log_expired` tinyint(1) DEFAULT NULL,
  `created` bigint(20) DEFAULT NULL,
  `updated` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_action_task_token_hash` (`token_hash`),
  KEY `IDX_action_task_runner_id` (`runner_id`),
  KEY `IDX_action_task_status` (`status`),
  KEY `IDX_action_task_commit_sha` (`commit_sha`),
  KEY `IDX_action_task_token_last_eight` (`token_last_eight`),
  KEY `IDX_action_task_started` (`started`),
  KEY `IDX_action_task_repo_id` (`repo_id`),
  KEY `IDX_action_task_owner_id` (`owner_id`),
  KEY `IDX_action_task_updated` (`updated`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action_task`
--

LOCK TABLES `action_task` WRITE;
/*!40000 ALTER TABLE `action_task` DISABLE KEYS */;
/*!40000 ALTER TABLE `action_task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `action_task_output`
--

DROP TABLE IF EXISTS `action_task_output`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `action_task_output` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `task_id` bigint(20) DEFAULT NULL,
  `output_key` varchar(255) DEFAULT NULL,
  `output_value` mediumtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_action_task_output_task_id_output_key` (`task_id`,`output_key`),
  KEY `IDX_action_task_output_task_id` (`task_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action_task_output`
--

LOCK TABLES `action_task_output` WRITE;
/*!40000 ALTER TABLE `action_task_output` DISABLE KEYS */;
/*!40000 ALTER TABLE `action_task_output` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `action_task_step`
--

DROP TABLE IF EXISTS `action_task_step`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `action_task_step` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `task_id` bigint(20) DEFAULT NULL,
  `index` bigint(20) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `log_index` bigint(20) DEFAULT NULL,
  `log_length` bigint(20) DEFAULT NULL,
  `started` bigint(20) DEFAULT NULL,
  `stopped` bigint(20) DEFAULT NULL,
  `created` bigint(20) DEFAULT NULL,
  `updated` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_action_task_step_task_index` (`task_id`,`index`),
  KEY `IDX_action_task_step_task_id` (`task_id`),
  KEY `IDX_action_task_step_index` (`index`),
  KEY `IDX_action_task_step_repo_id` (`repo_id`),
  KEY `IDX_action_task_step_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action_task_step`
--

LOCK TABLES `action_task_step` WRITE;
/*!40000 ALTER TABLE `action_task_step` DISABLE KEYS */;
/*!40000 ALTER TABLE `action_task_step` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `action_tasks_version`
--

DROP TABLE IF EXISTS `action_tasks_version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `action_tasks_version` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner_id` bigint(20) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `version` bigint(20) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_action_tasks_version_owner_repo` (`owner_id`,`repo_id`),
  KEY `IDX_action_tasks_version_repo_id` (`repo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action_tasks_version`
--

LOCK TABLES `action_tasks_version` WRITE;
/*!40000 ALTER TABLE `action_tasks_version` DISABLE KEYS */;
/*!40000 ALTER TABLE `action_tasks_version` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `action_variable`
--

DROP TABLE IF EXISTS `action_variable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `action_variable` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner_id` bigint(20) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `data` longtext NOT NULL,
  `created_unix` bigint(20) NOT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_action_variable_owner_repo_name` (`owner_id`,`repo_id`,`name`),
  KEY `IDX_action_variable_repo_id` (`repo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action_variable`
--

LOCK TABLES `action_variable` WRITE;
/*!40000 ALTER TABLE `action_variable` DISABLE KEYS */;
/*!40000 ALTER TABLE `action_variable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_state`
--

DROP TABLE IF EXISTS `app_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_state` (
  `id` varchar(200) NOT NULL,
  `revision` bigint(20) DEFAULT NULL,
  `content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_state`
--

LOCK TABLES `app_state` WRITE;
/*!40000 ALTER TABLE `app_state` DISABLE KEYS */;
INSERT INTO `app_state` VALUES ('runtime-state',0,'{\"last_app_path\":\"/usr/local/bin/gitea\",\"last_custom_conf\":\"/data/gitea/conf/app.ini\"}');
/*!40000 ALTER TABLE `app_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attachment`
--

DROP TABLE IF EXISTS `attachment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attachment` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uuid` varchar(40) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `issue_id` bigint(20) DEFAULT NULL,
  `release_id` bigint(20) DEFAULT NULL,
  `uploader_id` bigint(20) DEFAULT '0',
  `comment_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `download_count` bigint(20) DEFAULT '0',
  `size` bigint(20) DEFAULT '0',
  `created_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_attachment_uuid` (`uuid`),
  KEY `IDX_attachment_issue_id` (`issue_id`),
  KEY `IDX_attachment_release_id` (`release_id`),
  KEY `IDX_attachment_uploader_id` (`uploader_id`),
  KEY `IDX_attachment_repo_id` (`repo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attachment`
--

LOCK TABLES `attachment` WRITE;
/*!40000 ALTER TABLE `attachment` DISABLE KEYS */;
/*!40000 ALTER TABLE `attachment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `badge`
--

DROP TABLE IF EXISTS `badge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `badge` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `badge`
--

LOCK TABLES `badge` WRITE;
/*!40000 ALTER TABLE `badge` DISABLE KEYS */;
/*!40000 ALTER TABLE `badge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `branch`
--

DROP TABLE IF EXISTS `branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `branch` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `commit_id` varchar(255) DEFAULT NULL,
  `commit_message` text,
  `pusher_id` bigint(20) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `deleted_by_id` bigint(20) DEFAULT NULL,
  `deleted_unix` bigint(20) DEFAULT NULL,
  `commit_time` bigint(20) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_branch_s` (`repo_id`,`name`),
  KEY `IDX_branch_is_deleted` (`is_deleted`),
  KEY `IDX_branch_deleted_unix` (`deleted_unix`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branch`
--

LOCK TABLES `branch` WRITE;
/*!40000 ALTER TABLE `branch` DISABLE KEYS */;
INSERT INTO `branch` VALUES (3,4,'main','955e380e134f8172faade017ed39e44ec79a882d','feat: [KAN-99] #comment ✅ 글로벌 컨피그 도입 완료 - 24.09.24 #close #time 1h +review SR @313devops',1,0,0,0,1727177842,1727160159,1727177853);
/*!40000 ALTER TABLE `branch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collaboration`
--

DROP TABLE IF EXISTS `collaboration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `collaboration` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `mode` int(11) NOT NULL DEFAULT '2',
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_collaboration_s` (`repo_id`,`user_id`),
  KEY `IDX_collaboration_user_id` (`user_id`),
  KEY `IDX_collaboration_created_unix` (`created_unix`),
  KEY `IDX_collaboration_updated_unix` (`updated_unix`),
  KEY `IDX_collaboration_repo_id` (`repo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collaboration`
--

LOCK TABLES `collaboration` WRITE;
/*!40000 ALTER TABLE `collaboration` DISABLE KEYS */;
/*!40000 ALTER TABLE `collaboration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `type` int(11) DEFAULT NULL,
  `poster_id` bigint(20) DEFAULT NULL,
  `original_author` varchar(255) DEFAULT NULL,
  `original_author_id` bigint(20) DEFAULT NULL,
  `issue_id` bigint(20) DEFAULT NULL,
  `label_id` bigint(20) DEFAULT NULL,
  `old_project_id` bigint(20) DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  `old_milestone_id` bigint(20) DEFAULT NULL,
  `milestone_id` bigint(20) DEFAULT NULL,
  `time_id` bigint(20) DEFAULT NULL,
  `assignee_id` bigint(20) DEFAULT NULL,
  `removed_assignee` tinyint(1) DEFAULT NULL,
  `assignee_team_id` bigint(20) NOT NULL DEFAULT '0',
  `resolve_doer_id` bigint(20) DEFAULT NULL,
  `old_title` varchar(255) DEFAULT NULL,
  `new_title` varchar(255) DEFAULT NULL,
  `old_ref` varchar(255) DEFAULT NULL,
  `new_ref` varchar(255) DEFAULT NULL,
  `dependent_issue_id` bigint(20) DEFAULT NULL,
  `commit_id` bigint(20) DEFAULT NULL,
  `line` bigint(20) DEFAULT NULL,
  `tree_path` varchar(255) DEFAULT NULL,
  `content` longtext,
  `patch` longtext,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  `commit_sha` varchar(40) DEFAULT NULL,
  `review_id` bigint(20) DEFAULT NULL,
  `invalidated` tinyint(1) DEFAULT NULL,
  `ref_repo_id` bigint(20) DEFAULT NULL,
  `ref_issue_id` bigint(20) DEFAULT NULL,
  `ref_comment_id` bigint(20) DEFAULT NULL,
  `ref_action` smallint(6) DEFAULT NULL,
  `ref_is_pull` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_comment_ref_comment_id` (`ref_comment_id`),
  KEY `IDX_comment_poster_id` (`poster_id`),
  KEY `IDX_comment_issue_id` (`issue_id`),
  KEY `IDX_comment_dependent_issue_id` (`dependent_issue_id`),
  KEY `IDX_comment_created_unix` (`created_unix`),
  KEY `IDX_comment_ref_repo_id` (`ref_repo_id`),
  KEY `IDX_comment_ref_issue_id` (`ref_issue_id`),
  KEY `IDX_comment_type` (`type`),
  KEY `IDX_comment_updated_unix` (`updated_unix`),
  KEY `IDX_comment_review_id` (`review_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commit_status`
--

DROP TABLE IF EXISTS `commit_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `commit_status` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `index` bigint(20) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `state` varchar(7) NOT NULL,
  `sha` varchar(64) NOT NULL,
  `target_url` text,
  `description` text,
  `context_hash` char(40) DEFAULT NULL,
  `context` text,
  `creator_id` bigint(20) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_commit_status_repo_sha_index` (`index`,`repo_id`,`sha`),
  KEY `IDX_commit_status_context_hash` (`context_hash`),
  KEY `IDX_commit_status_created_unix` (`created_unix`),
  KEY `IDX_commit_status_updated_unix` (`updated_unix`),
  KEY `IDX_commit_status_index` (`index`),
  KEY `IDX_commit_status_repo_id` (`repo_id`),
  KEY `IDX_commit_status_sha` (`sha`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commit_status`
--

LOCK TABLES `commit_status` WRITE;
/*!40000 ALTER TABLE `commit_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `commit_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commit_status_index`
--

DROP TABLE IF EXISTS `commit_status_index`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `commit_status_index` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) DEFAULT NULL,
  `sha` varchar(255) DEFAULT NULL,
  `max_index` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_commit_status_index_repo_sha` (`repo_id`,`sha`),
  KEY `IDX_commit_status_index_max_index` (`max_index`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commit_status_index`
--

LOCK TABLES `commit_status_index` WRITE;
/*!40000 ALTER TABLE `commit_status_index` DISABLE KEYS */;
/*!40000 ALTER TABLE `commit_status_index` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dbfs_data`
--

DROP TABLE IF EXISTS `dbfs_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dbfs_data` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `revision` bigint(20) NOT NULL,
  `meta_id` bigint(20) NOT NULL,
  `blob_offset` bigint(20) NOT NULL,
  `blob_size` bigint(20) NOT NULL,
  `blob_data` blob NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_dbfs_data_meta_offset` (`meta_id`,`blob_offset`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dbfs_data`
--

LOCK TABLES `dbfs_data` WRITE;
/*!40000 ALTER TABLE `dbfs_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `dbfs_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dbfs_meta`
--

DROP TABLE IF EXISTS `dbfs_meta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dbfs_meta` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `full_path` varchar(500) NOT NULL,
  `block_size` bigint(20) NOT NULL,
  `file_size` bigint(20) NOT NULL,
  `create_timestamp` bigint(20) NOT NULL,
  `modify_timestamp` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_dbfs_meta_full_path` (`full_path`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dbfs_meta`
--

LOCK TABLES `dbfs_meta` WRITE;
/*!40000 ALTER TABLE `dbfs_meta` DISABLE KEYS */;
/*!40000 ALTER TABLE `dbfs_meta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deploy_key`
--

DROP TABLE IF EXISTS `deploy_key`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `deploy_key` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `key_id` bigint(20) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `fingerprint` varchar(255) DEFAULT NULL,
  `mode` int(11) NOT NULL DEFAULT '1',
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_deploy_key_s` (`key_id`,`repo_id`),
  KEY `IDX_deploy_key_key_id` (`key_id`),
  KEY `IDX_deploy_key_repo_id` (`repo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deploy_key`
--

LOCK TABLES `deploy_key` WRITE;
/*!40000 ALTER TABLE `deploy_key` DISABLE KEYS */;
/*!40000 ALTER TABLE `deploy_key` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `email_address`
--

DROP TABLE IF EXISTS `email_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `email_address` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `lower_email` varchar(255) NOT NULL,
  `is_activated` tinyint(1) DEFAULT NULL,
  `is_primary` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_email_address_email` (`email`),
  UNIQUE KEY `UQE_email_address_lower_email` (`lower_email`),
  KEY `IDX_email_address_uid` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `email_address`
--

LOCK TABLES `email_address` WRITE;
/*!40000 ALTER TABLE `email_address` DISABLE KEYS */;
INSERT INTO `email_address` VALUES (1,1,'313cokr@gmail.com','313cokr@gmail.com',1,1),(2,2,'dumbbelloper@gmail.com','dumbbelloper@gmail.com',1,1);
/*!40000 ALTER TABLE `email_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `email_hash`
--

DROP TABLE IF EXISTS `email_hash`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `email_hash` (
  `hash` varchar(32) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`hash`),
  UNIQUE KEY `UQE_email_hash_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `email_hash`
--

LOCK TABLES `email_hash` WRITE;
/*!40000 ALTER TABLE `email_hash` DISABLE KEYS */;
INSERT INTO `email_hash` VALUES ('18daf5af0027ec265a5d677d45735595','313cokr@gmail.com'),('d78188971d44b638266df217be233d82','dmswlsl@0203'),('ad528e2c1f547384205dd3c95eab89d7','dumbbelloper@gmail.com'),('5d537724535e7d3bd8f4e3701e8676f1','mklee@mz.co.kr');
/*!40000 ALTER TABLE `email_hash` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `external_login_user`
--

DROP TABLE IF EXISTS `external_login_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `external_login_user` (
  `external_id` varchar(255) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `login_source_id` bigint(20) NOT NULL,
  `raw_data` text,
  `provider` varchar(25) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `nick_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `avatar_url` text,
  `location` varchar(255) DEFAULT NULL,
  `access_token` text,
  `access_token_secret` text,
  `refresh_token` text,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`external_id`,`login_source_id`),
  KEY `IDX_external_login_user_provider` (`provider`),
  KEY `IDX_external_login_user_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `external_login_user`
--

LOCK TABLES `external_login_user` WRITE;
/*!40000 ALTER TABLE `external_login_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `external_login_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `follow` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `follow_id` bigint(20) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_follow_follow` (`user_id`,`follow_id`),
  KEY `IDX_follow_created_unix` (`created_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow`
--

LOCK TABLES `follow` WRITE;
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
/*!40000 ALTER TABLE `follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gpg_key`
--

DROP TABLE IF EXISTS `gpg_key`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gpg_key` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner_id` bigint(20) NOT NULL,
  `key_id` char(16) NOT NULL,
  `primary_key_id` char(16) DEFAULT NULL,
  `content` mediumtext NOT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `expired_unix` bigint(20) DEFAULT NULL,
  `added_unix` bigint(20) DEFAULT NULL,
  `emails` text,
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  `can_sign` tinyint(1) DEFAULT NULL,
  `can_encrypt_comms` tinyint(1) DEFAULT NULL,
  `can_encrypt_storage` tinyint(1) DEFAULT NULL,
  `can_certify` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_gpg_key_owner_id` (`owner_id`),
  KEY `IDX_gpg_key_key_id` (`key_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gpg_key`
--

LOCK TABLES `gpg_key` WRITE;
/*!40000 ALTER TABLE `gpg_key` DISABLE KEYS */;
/*!40000 ALTER TABLE `gpg_key` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gpg_key_import`
--

DROP TABLE IF EXISTS `gpg_key_import`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gpg_key_import` (
  `key_id` char(16) NOT NULL,
  `content` mediumtext NOT NULL,
  PRIMARY KEY (`key_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gpg_key_import`
--

LOCK TABLES `gpg_key_import` WRITE;
/*!40000 ALTER TABLE `gpg_key_import` DISABLE KEYS */;
/*!40000 ALTER TABLE `gpg_key_import` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hook_task`
--

DROP TABLE IF EXISTS `hook_task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hook_task` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `hook_id` bigint(20) DEFAULT NULL,
  `uuid` varchar(255) DEFAULT NULL,
  `payload_content` longtext,
  `event_type` varchar(255) DEFAULT NULL,
  `is_delivered` tinyint(1) DEFAULT NULL,
  `delivered` bigint(20) DEFAULT NULL,
  `is_succeed` tinyint(1) DEFAULT NULL,
  `request_content` longtext,
  `response_content` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_hook_task_uuid` (`uuid`),
  KEY `IDX_hook_task_hook_id` (`hook_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hook_task`
--

LOCK TABLES `hook_task` WRITE;
/*!40000 ALTER TABLE `hook_task` DISABLE KEYS */;
/*!40000 ALTER TABLE `hook_task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issue`
--

DROP TABLE IF EXISTS `issue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `issue` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) DEFAULT NULL,
  `index` bigint(20) DEFAULT NULL,
  `poster_id` bigint(20) DEFAULT NULL,
  `original_author` varchar(255) DEFAULT NULL,
  `original_author_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `content` longtext,
  `milestone_id` bigint(20) DEFAULT NULL,
  `priority` int(11) DEFAULT NULL,
  `is_closed` tinyint(1) DEFAULT NULL,
  `is_pull` tinyint(1) DEFAULT NULL,
  `num_comments` int(11) DEFAULT NULL,
  `ref` varchar(255) DEFAULT NULL,
  `pin_order` int(11) DEFAULT '0',
  `deadline_unix` bigint(20) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  `closed_unix` bigint(20) DEFAULT NULL,
  `is_locked` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_issue_repo_index` (`repo_id`,`index`),
  KEY `IDX_issue_is_closed` (`is_closed`),
  KEY `IDX_issue_deadline_unix` (`deadline_unix`),
  KEY `IDX_issue_created_unix` (`created_unix`),
  KEY `IDX_issue_repo_id` (`repo_id`),
  KEY `IDX_issue_poster_id` (`poster_id`),
  KEY `IDX_issue_original_author_id` (`original_author_id`),
  KEY `IDX_issue_milestone_id` (`milestone_id`),
  KEY `IDX_issue_updated_unix` (`updated_unix`),
  KEY `IDX_issue_is_pull` (`is_pull`),
  KEY `IDX_issue_closed_unix` (`closed_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issue`
--

LOCK TABLES `issue` WRITE;
/*!40000 ALTER TABLE `issue` DISABLE KEYS */;
/*!40000 ALTER TABLE `issue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issue_assignees`
--

DROP TABLE IF EXISTS `issue_assignees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `issue_assignees` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `assignee_id` bigint(20) DEFAULT NULL,
  `issue_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_issue_assignees_assignee_id` (`assignee_id`),
  KEY `IDX_issue_assignees_issue_id` (`issue_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issue_assignees`
--

LOCK TABLES `issue_assignees` WRITE;
/*!40000 ALTER TABLE `issue_assignees` DISABLE KEYS */;
/*!40000 ALTER TABLE `issue_assignees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issue_content_history`
--

DROP TABLE IF EXISTS `issue_content_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `issue_content_history` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `poster_id` bigint(20) DEFAULT NULL,
  `issue_id` bigint(20) DEFAULT NULL,
  `comment_id` bigint(20) DEFAULT NULL,
  `edited_unix` bigint(20) DEFAULT NULL,
  `content_text` longtext,
  `is_first_created` tinyint(1) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_issue_content_history_issue_id` (`issue_id`),
  KEY `IDX_issue_content_history_comment_id` (`comment_id`),
  KEY `IDX_issue_content_history_edited_unix` (`edited_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issue_content_history`
--

LOCK TABLES `issue_content_history` WRITE;
/*!40000 ALTER TABLE `issue_content_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `issue_content_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issue_dependency`
--

DROP TABLE IF EXISTS `issue_dependency`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `issue_dependency` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `issue_id` bigint(20) NOT NULL,
  `dependency_id` bigint(20) NOT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_issue_dependency_issue_dependency` (`issue_id`,`dependency_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issue_dependency`
--

LOCK TABLES `issue_dependency` WRITE;
/*!40000 ALTER TABLE `issue_dependency` DISABLE KEYS */;
/*!40000 ALTER TABLE `issue_dependency` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issue_index`
--

DROP TABLE IF EXISTS `issue_index`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `issue_index` (
  `group_id` bigint(20) NOT NULL,
  `max_index` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`group_id`),
  KEY `IDX_issue_index_max_index` (`max_index`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issue_index`
--

LOCK TABLES `issue_index` WRITE;
/*!40000 ALTER TABLE `issue_index` DISABLE KEYS */;
/*!40000 ALTER TABLE `issue_index` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issue_label`
--

DROP TABLE IF EXISTS `issue_label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `issue_label` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `issue_id` bigint(20) DEFAULT NULL,
  `label_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_issue_label_s` (`issue_id`,`label_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issue_label`
--

LOCK TABLES `issue_label` WRITE;
/*!40000 ALTER TABLE `issue_label` DISABLE KEYS */;
/*!40000 ALTER TABLE `issue_label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issue_user`
--

DROP TABLE IF EXISTS `issue_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `issue_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) DEFAULT NULL,
  `issue_id` bigint(20) DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT NULL,
  `is_mentioned` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_issue_user_uid` (`uid`),
  KEY `IDX_issue_user_issue_id` (`issue_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issue_user`
--

LOCK TABLES `issue_user` WRITE;
/*!40000 ALTER TABLE `issue_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `issue_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issue_watch`
--

DROP TABLE IF EXISTS `issue_watch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `issue_watch` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `issue_id` bigint(20) NOT NULL,
  `is_watching` tinyint(1) NOT NULL,
  `created_unix` bigint(20) NOT NULL,
  `updated_unix` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_issue_watch_watch` (`user_id`,`issue_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issue_watch`
--

LOCK TABLES `issue_watch` WRITE;
/*!40000 ALTER TABLE `issue_watch` DISABLE KEYS */;
/*!40000 ALTER TABLE `issue_watch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `label`
--

DROP TABLE IF EXISTS `label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `label` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) DEFAULT NULL,
  `org_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `exclusive` tinyint(1) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `color` varchar(7) DEFAULT NULL,
  `num_issues` int(11) DEFAULT NULL,
  `num_closed_issues` int(11) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  `archived_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_label_repo_id` (`repo_id`),
  KEY `IDX_label_org_id` (`org_id`),
  KEY `IDX_label_created_unix` (`created_unix`),
  KEY `IDX_label_updated_unix` (`updated_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `label`
--

LOCK TABLES `label` WRITE;
/*!40000 ALTER TABLE `label` DISABLE KEYS */;
/*!40000 ALTER TABLE `label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `language_stat`
--

DROP TABLE IF EXISTS `language_stat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `language_stat` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) NOT NULL,
  `commit_id` varchar(255) DEFAULT NULL,
  `is_primary` tinyint(1) DEFAULT NULL,
  `language` varchar(50) NOT NULL,
  `size` bigint(20) NOT NULL DEFAULT '0',
  `created_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_language_stat_s` (`repo_id`,`language`),
  KEY `IDX_language_stat_language` (`language`),
  KEY `IDX_language_stat_created_unix` (`created_unix`),
  KEY `IDX_language_stat_repo_id` (`repo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `language_stat`
--

LOCK TABLES `language_stat` WRITE;
/*!40000 ALTER TABLE `language_stat` DISABLE KEYS */;
/*!40000 ALTER TABLE `language_stat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lfs_lock`
--

DROP TABLE IF EXISTS `lfs_lock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lfs_lock` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) NOT NULL,
  `owner_id` bigint(20) NOT NULL,
  `path` text,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_lfs_lock_repo_id` (`repo_id`),
  KEY `IDX_lfs_lock_owner_id` (`owner_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lfs_lock`
--

LOCK TABLES `lfs_lock` WRITE;
/*!40000 ALTER TABLE `lfs_lock` DISABLE KEYS */;
/*!40000 ALTER TABLE `lfs_lock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lfs_meta_object`
--

DROP TABLE IF EXISTS `lfs_meta_object`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lfs_meta_object` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `oid` varchar(255) NOT NULL,
  `size` bigint(20) NOT NULL,
  `repository_id` bigint(20) NOT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_lfs_meta_object_s` (`oid`,`repository_id`),
  KEY `IDX_lfs_meta_object_oid` (`oid`),
  KEY `IDX_lfs_meta_object_repository_id` (`repository_id`),
  KEY `IDX_lfs_meta_object_updated_unix` (`updated_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lfs_meta_object`
--

LOCK TABLES `lfs_meta_object` WRITE;
/*!40000 ALTER TABLE `lfs_meta_object` DISABLE KEYS */;
/*!40000 ALTER TABLE `lfs_meta_object` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_source`
--

DROP TABLE IF EXISTS `login_source`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login_source` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `type` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '0',
  `is_sync_enabled` tinyint(1) NOT NULL DEFAULT '0',
  `cfg` text,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_login_source_name` (`name`),
  KEY `IDX_login_source_is_active` (`is_active`),
  KEY `IDX_login_source_is_sync_enabled` (`is_sync_enabled`),
  KEY `IDX_login_source_created_unix` (`created_unix`),
  KEY `IDX_login_source_updated_unix` (`updated_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_source`
--

LOCK TABLES `login_source` WRITE;
/*!40000 ALTER TABLE `login_source` DISABLE KEYS */;
/*!40000 ALTER TABLE `login_source` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `milestone`
--

DROP TABLE IF EXISTS `milestone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `milestone` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `content` text,
  `is_closed` tinyint(1) DEFAULT NULL,
  `num_issues` int(11) DEFAULT NULL,
  `num_closed_issues` int(11) DEFAULT NULL,
  `completeness` int(11) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  `deadline_unix` bigint(20) DEFAULT NULL,
  `closed_date_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_milestone_repo_id` (`repo_id`),
  KEY `IDX_milestone_created_unix` (`created_unix`),
  KEY `IDX_milestone_updated_unix` (`updated_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `milestone`
--

LOCK TABLES `milestone` WRITE;
/*!40000 ALTER TABLE `milestone` DISABLE KEYS */;
/*!40000 ALTER TABLE `milestone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mirror`
--

DROP TABLE IF EXISTS `mirror`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mirror` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) DEFAULT NULL,
  `interval` bigint(20) DEFAULT NULL,
  `enable_prune` tinyint(1) NOT NULL DEFAULT '1',
  `updated_unix` bigint(20) DEFAULT NULL,
  `next_update_unix` bigint(20) DEFAULT NULL,
  `lfs_enabled` tinyint(1) NOT NULL DEFAULT '0',
  `lfs_endpoint` text,
  `remote_address` varchar(2048) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_mirror_repo_id` (`repo_id`),
  KEY `IDX_mirror_updated_unix` (`updated_unix`),
  KEY `IDX_mirror_next_update_unix` (`next_update_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mirror`
--

LOCK TABLES `mirror` WRITE;
/*!40000 ALTER TABLE `mirror` DISABLE KEYS */;
/*!40000 ALTER TABLE `mirror` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notice`
--

DROP TABLE IF EXISTS `notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notice` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `type` int(11) DEFAULT NULL,
  `description` text,
  `created_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_notice_created_unix` (`created_unix`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notice`
--

LOCK TABLES `notice` WRITE;
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
INSERT INTO `notice` VALUES (1,2,'Cron: Start schedule tasks canceled: find specs: dial tcp 10.0.1.146:3306: connect: no route to host',1723831039);
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notification` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `repo_id` bigint(20) NOT NULL,
  `status` smallint(6) NOT NULL,
  `source` smallint(6) NOT NULL,
  `issue_id` bigint(20) NOT NULL,
  `commit_id` varchar(255) DEFAULT NULL,
  `comment_id` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) NOT NULL,
  `created_unix` bigint(20) NOT NULL,
  `updated_unix` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_notification_created_unix` (`created_unix`),
  KEY `IDX_notification_updated_unix` (`updated_unix`),
  KEY `IDX_notification_repo_id` (`repo_id`),
  KEY `IDX_notification_status` (`status`),
  KEY `IDX_notification_issue_id` (`issue_id`),
  KEY `IDX_notification_commit_id` (`commit_id`),
  KEY `IDX_notification_user_id` (`user_id`),
  KEY `IDX_notification_source` (`source`),
  KEY `IDX_notification_updated_by` (`updated_by`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth2_application`
--

DROP TABLE IF EXISTS `oauth2_application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth2_application` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `client_id` varchar(255) DEFAULT NULL,
  `client_secret` varchar(255) DEFAULT NULL,
  `confidential_client` tinyint(1) NOT NULL DEFAULT '1',
  `redirect_uris` text,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_oauth2_application_client_id` (`client_id`),
  KEY `IDX_oauth2_application_uid` (`uid`),
  KEY `IDX_oauth2_application_created_unix` (`created_unix`),
  KEY `IDX_oauth2_application_updated_unix` (`updated_unix`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth2_application`
--

LOCK TABLES `oauth2_application` WRITE;
/*!40000 ALTER TABLE `oauth2_application` DISABLE KEYS */;
INSERT INTO `oauth2_application` VALUES (1,0,'git-credential-oauth','a4792ccc-144e-407e-86c9-5e7d8d9c3269','',0,'[\"http://127.0.0.1\",\"https://127.0.0.1\"]',1720858384,1720858384),(2,0,'Git Credential Manager','e90ee53c-94e2-48ac-9358-a874fb9e0662','',0,'[\"http://127.0.0.1\",\"https://127.0.0.1\"]',1720858384,1720858384);
/*!40000 ALTER TABLE `oauth2_application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth2_authorization_code`
--

DROP TABLE IF EXISTS `oauth2_authorization_code`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth2_authorization_code` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `grant_id` bigint(20) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `code_challenge` varchar(255) DEFAULT NULL,
  `code_challenge_method` varchar(255) DEFAULT NULL,
  `redirect_uri` varchar(255) DEFAULT NULL,
  `valid_until` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_oauth2_authorization_code_code` (`code`),
  KEY `IDX_oauth2_authorization_code_valid_until` (`valid_until`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth2_authorization_code`
--

LOCK TABLES `oauth2_authorization_code` WRITE;
/*!40000 ALTER TABLE `oauth2_authorization_code` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth2_authorization_code` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth2_grant`
--

DROP TABLE IF EXISTS `oauth2_grant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth2_grant` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `application_id` bigint(20) DEFAULT NULL,
  `counter` bigint(20) NOT NULL DEFAULT '1',
  `scope` text,
  `nonce` text,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_oauth2_grant_user_application` (`user_id`,`application_id`),
  KEY `IDX_oauth2_grant_application_id` (`application_id`),
  KEY `IDX_oauth2_grant_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth2_grant`
--

LOCK TABLES `oauth2_grant` WRITE;
/*!40000 ALTER TABLE `oauth2_grant` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth2_grant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `org_user`
--

DROP TABLE IF EXISTS `org_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `org_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) DEFAULT NULL,
  `org_id` bigint(20) DEFAULT NULL,
  `is_public` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_org_user_s` (`uid`,`org_id`),
  KEY `IDX_org_user_uid` (`uid`),
  KEY `IDX_org_user_org_id` (`org_id`),
  KEY `IDX_org_user_is_public` (`is_public`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `org_user`
--

LOCK TABLES `org_user` WRITE;
/*!40000 ALTER TABLE `org_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `org_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package`
--

DROP TABLE IF EXISTS `package`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `package` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner_id` bigint(20) NOT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lower_name` varchar(255) NOT NULL,
  `semver_compatible` tinyint(1) NOT NULL DEFAULT '0',
  `is_internal` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_package_s` (`owner_id`,`type`,`lower_name`),
  KEY `IDX_package_owner_id` (`owner_id`),
  KEY `IDX_package_repo_id` (`repo_id`),
  KEY `IDX_package_type` (`type`),
  KEY `IDX_package_lower_name` (`lower_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package`
--

LOCK TABLES `package` WRITE;
/*!40000 ALTER TABLE `package` DISABLE KEYS */;
/*!40000 ALTER TABLE `package` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package_blob`
--

DROP TABLE IF EXISTS `package_blob`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `package_blob` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `size` bigint(20) NOT NULL DEFAULT '0',
  `hash_md5` char(32) NOT NULL,
  `hash_sha1` char(40) NOT NULL,
  `hash_sha256` char(64) NOT NULL,
  `hash_sha512` char(128) NOT NULL,
  `created_unix` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_package_blob_md5` (`hash_md5`),
  UNIQUE KEY `UQE_package_blob_sha256` (`hash_sha256`),
  UNIQUE KEY `UQE_package_blob_sha512` (`hash_sha512`),
  UNIQUE KEY `UQE_package_blob_sha1` (`hash_sha1`),
  KEY `IDX_package_blob_hash_md5` (`hash_md5`),
  KEY `IDX_package_blob_hash_sha256` (`hash_sha256`),
  KEY `IDX_package_blob_hash_sha512` (`hash_sha512`),
  KEY `IDX_package_blob_created_unix` (`created_unix`),
  KEY `IDX_package_blob_hash_sha1` (`hash_sha1`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package_blob`
--

LOCK TABLES `package_blob` WRITE;
/*!40000 ALTER TABLE `package_blob` DISABLE KEYS */;
/*!40000 ALTER TABLE `package_blob` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package_blob_upload`
--

DROP TABLE IF EXISTS `package_blob_upload`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `package_blob_upload` (
  `id` varchar(255) NOT NULL,
  `bytes_received` bigint(20) NOT NULL DEFAULT '0',
  `hash_state_bytes` blob,
  `created_unix` bigint(20) NOT NULL,
  `updated_unix` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_package_blob_upload_updated_unix` (`updated_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package_blob_upload`
--

LOCK TABLES `package_blob_upload` WRITE;
/*!40000 ALTER TABLE `package_blob_upload` DISABLE KEYS */;
/*!40000 ALTER TABLE `package_blob_upload` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package_cleanup_rule`
--

DROP TABLE IF EXISTS `package_cleanup_rule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `package_cleanup_rule` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `enabled` tinyint(1) NOT NULL DEFAULT '0',
  `owner_id` bigint(20) NOT NULL DEFAULT '0',
  `type` varchar(255) NOT NULL,
  `keep_count` int(11) NOT NULL DEFAULT '0',
  `keep_pattern` varchar(255) NOT NULL DEFAULT '',
  `remove_days` int(11) NOT NULL DEFAULT '0',
  `remove_pattern` varchar(255) NOT NULL DEFAULT '',
  `match_full_name` tinyint(1) NOT NULL DEFAULT '0',
  `created_unix` bigint(20) NOT NULL DEFAULT '0',
  `updated_unix` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_package_cleanup_rule_s` (`owner_id`,`type`),
  KEY `IDX_package_cleanup_rule_enabled` (`enabled`),
  KEY `IDX_package_cleanup_rule_owner_id` (`owner_id`),
  KEY `IDX_package_cleanup_rule_type` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package_cleanup_rule`
--

LOCK TABLES `package_cleanup_rule` WRITE;
/*!40000 ALTER TABLE `package_cleanup_rule` DISABLE KEYS */;
/*!40000 ALTER TABLE `package_cleanup_rule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package_file`
--

DROP TABLE IF EXISTS `package_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `package_file` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `version_id` bigint(20) NOT NULL,
  `blob_id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lower_name` varchar(255) NOT NULL,
  `composite_key` varchar(255) DEFAULT NULL,
  `is_lead` tinyint(1) NOT NULL DEFAULT '0',
  `created_unix` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_package_file_s` (`version_id`,`lower_name`,`composite_key`),
  KEY `IDX_package_file_blob_id` (`blob_id`),
  KEY `IDX_package_file_lower_name` (`lower_name`),
  KEY `IDX_package_file_composite_key` (`composite_key`),
  KEY `IDX_package_file_created_unix` (`created_unix`),
  KEY `IDX_package_file_version_id` (`version_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package_file`
--

LOCK TABLES `package_file` WRITE;
/*!40000 ALTER TABLE `package_file` DISABLE KEYS */;
/*!40000 ALTER TABLE `package_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package_property`
--

DROP TABLE IF EXISTS `package_property`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `package_property` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `ref_type` bigint(20) NOT NULL,
  `ref_id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `value` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_package_property_ref_type` (`ref_type`),
  KEY `IDX_package_property_ref_id` (`ref_id`),
  KEY `IDX_package_property_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package_property`
--

LOCK TABLES `package_property` WRITE;
/*!40000 ALTER TABLE `package_property` DISABLE KEYS */;
/*!40000 ALTER TABLE `package_property` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package_version`
--

DROP TABLE IF EXISTS `package_version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `package_version` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `package_id` bigint(20) NOT NULL,
  `creator_id` bigint(20) NOT NULL DEFAULT '0',
  `version` varchar(255) NOT NULL,
  `lower_version` varchar(255) NOT NULL,
  `created_unix` bigint(20) NOT NULL,
  `is_internal` tinyint(1) NOT NULL DEFAULT '0',
  `metadata_json` longtext,
  `download_count` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_package_version_s` (`package_id`,`lower_version`),
  KEY `IDX_package_version_created_unix` (`created_unix`),
  KEY `IDX_package_version_is_internal` (`is_internal`),
  KEY `IDX_package_version_package_id` (`package_id`),
  KEY `IDX_package_version_lower_version` (`lower_version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package_version`
--

LOCK TABLES `package_version` WRITE;
/*!40000 ALTER TABLE `package_version` DISABLE KEYS */;
/*!40000 ALTER TABLE `package_version` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `owner_id` bigint(20) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `creator_id` bigint(20) NOT NULL,
  `is_closed` tinyint(1) DEFAULT NULL,
  `board_type` int(10) unsigned DEFAULT NULL,
  `card_type` int(10) unsigned DEFAULT NULL,
  `type` int(10) unsigned DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  `closed_date_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_project_updated_unix` (`updated_unix`),
  KEY `IDX_project_title` (`title`),
  KEY `IDX_project_owner_id` (`owner_id`),
  KEY `IDX_project_repo_id` (`repo_id`),
  KEY `IDX_project_is_closed` (`is_closed`),
  KEY `IDX_project_created_unix` (`created_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_board`
--

DROP TABLE IF EXISTS `project_board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_board` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `default` tinyint(1) NOT NULL DEFAULT '0',
  `sorting` int(11) NOT NULL DEFAULT '0',
  `color` varchar(7) DEFAULT NULL,
  `project_id` bigint(20) NOT NULL,
  `creator_id` bigint(20) NOT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_project_board_project_id` (`project_id`),
  KEY `IDX_project_board_created_unix` (`created_unix`),
  KEY `IDX_project_board_updated_unix` (`updated_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_board`
--

LOCK TABLES `project_board` WRITE;
/*!40000 ALTER TABLE `project_board` DISABLE KEYS */;
/*!40000 ALTER TABLE `project_board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_issue`
--

DROP TABLE IF EXISTS `project_issue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_issue` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `issue_id` bigint(20) DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  `project_board_id` bigint(20) DEFAULT NULL,
  `sorting` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `IDX_project_issue_issue_id` (`issue_id`),
  KEY `IDX_project_issue_project_id` (`project_id`),
  KEY `IDX_project_issue_project_board_id` (`project_board_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_issue`
--

LOCK TABLES `project_issue` WRITE;
/*!40000 ALTER TABLE `project_issue` DISABLE KEYS */;
/*!40000 ALTER TABLE `project_issue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `protected_branch`
--

DROP TABLE IF EXISTS `protected_branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `protected_branch` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) DEFAULT NULL,
  `branch_name` varchar(255) DEFAULT NULL,
  `can_push` tinyint(1) NOT NULL DEFAULT '0',
  `enable_whitelist` tinyint(1) DEFAULT NULL,
  `whitelist_user_i_ds` text,
  `whitelist_team_i_ds` text,
  `enable_merge_whitelist` tinyint(1) NOT NULL DEFAULT '0',
  `whitelist_deploy_keys` tinyint(1) NOT NULL DEFAULT '0',
  `merge_whitelist_user_i_ds` text,
  `merge_whitelist_team_i_ds` text,
  `enable_status_check` tinyint(1) NOT NULL DEFAULT '0',
  `status_check_contexts` text,
  `enable_approvals_whitelist` tinyint(1) NOT NULL DEFAULT '0',
  `approvals_whitelist_user_i_ds` text,
  `approvals_whitelist_team_i_ds` text,
  `required_approvals` bigint(20) NOT NULL DEFAULT '0',
  `block_on_rejected_reviews` tinyint(1) NOT NULL DEFAULT '0',
  `block_on_official_review_requests` tinyint(1) NOT NULL DEFAULT '0',
  `block_on_outdated_branch` tinyint(1) NOT NULL DEFAULT '0',
  `dismiss_stale_approvals` tinyint(1) NOT NULL DEFAULT '0',
  `require_signed_commits` tinyint(1) NOT NULL DEFAULT '0',
  `protected_file_patterns` text,
  `unprotected_file_patterns` text,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_protected_branch_s` (`repo_id`,`branch_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `protected_branch`
--

LOCK TABLES `protected_branch` WRITE;
/*!40000 ALTER TABLE `protected_branch` DISABLE KEYS */;
/*!40000 ALTER TABLE `protected_branch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `protected_tag`
--

DROP TABLE IF EXISTS `protected_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `protected_tag` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) DEFAULT NULL,
  `name_pattern` varchar(255) DEFAULT NULL,
  `allowlist_user_i_ds` text,
  `allowlist_team_i_ds` text,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `protected_tag`
--

LOCK TABLES `protected_tag` WRITE;
/*!40000 ALTER TABLE `protected_tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `protected_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `public_key`
--

DROP TABLE IF EXISTS `public_key`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `public_key` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner_id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `fingerprint` varchar(255) NOT NULL,
  `content` mediumtext NOT NULL,
  `mode` int(11) NOT NULL DEFAULT '2',
  `type` int(11) NOT NULL DEFAULT '1',
  `login_source_id` bigint(20) NOT NULL DEFAULT '0',
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `IDX_public_key_owner_id` (`owner_id`),
  KEY `IDX_public_key_fingerprint` (`fingerprint`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `public_key`
--

LOCK TABLES `public_key` WRITE;
/*!40000 ALTER TABLE `public_key` DISABLE KEYS */;
/*!40000 ALTER TABLE `public_key` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pull_auto_merge`
--

DROP TABLE IF EXISTS `pull_auto_merge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pull_auto_merge` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `pull_id` bigint(20) DEFAULT NULL,
  `doer_id` bigint(20) NOT NULL,
  `merge_style` varchar(30) DEFAULT NULL,
  `message` longtext,
  `created_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_pull_auto_merge_pull_id` (`pull_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pull_auto_merge`
--

LOCK TABLES `pull_auto_merge` WRITE;
/*!40000 ALTER TABLE `pull_auto_merge` DISABLE KEYS */;
/*!40000 ALTER TABLE `pull_auto_merge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pull_request`
--

DROP TABLE IF EXISTS `pull_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pull_request` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `type` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `conflicted_files` text,
  `commits_ahead` int(11) DEFAULT NULL,
  `commits_behind` int(11) DEFAULT NULL,
  `changed_protected_files` text,
  `issue_id` bigint(20) DEFAULT NULL,
  `index` bigint(20) DEFAULT NULL,
  `head_repo_id` bigint(20) DEFAULT NULL,
  `base_repo_id` bigint(20) DEFAULT NULL,
  `head_branch` varchar(255) DEFAULT NULL,
  `base_branch` varchar(255) DEFAULT NULL,
  `merge_base` varchar(40) DEFAULT NULL,
  `allow_maintainer_edit` tinyint(1) NOT NULL DEFAULT '0',
  `has_merged` tinyint(1) DEFAULT NULL,
  `merged_commit_id` varchar(40) DEFAULT NULL,
  `merger_id` bigint(20) DEFAULT NULL,
  `merged_unix` bigint(20) DEFAULT NULL,
  `flow` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `IDX_pull_request_merger_id` (`merger_id`),
  KEY `IDX_pull_request_merged_unix` (`merged_unix`),
  KEY `IDX_pull_request_issue_id` (`issue_id`),
  KEY `IDX_pull_request_head_repo_id` (`head_repo_id`),
  KEY `IDX_pull_request_base_repo_id` (`base_repo_id`),
  KEY `IDX_pull_request_has_merged` (`has_merged`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pull_request`
--

LOCK TABLES `pull_request` WRITE;
/*!40000 ALTER TABLE `pull_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `pull_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `push_mirror`
--

DROP TABLE IF EXISTS `push_mirror`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `push_mirror` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) DEFAULT NULL,
  `remote_name` varchar(255) DEFAULT NULL,
  `remote_address` varchar(2048) DEFAULT NULL,
  `sync_on_commit` tinyint(1) NOT NULL DEFAULT '1',
  `interval` bigint(20) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `last_update` bigint(20) DEFAULT NULL,
  `last_error` text,
  PRIMARY KEY (`id`),
  KEY `IDX_push_mirror_repo_id` (`repo_id`),
  KEY `IDX_push_mirror_last_update` (`last_update`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `push_mirror`
--

LOCK TABLES `push_mirror` WRITE;
/*!40000 ALTER TABLE `push_mirror` DISABLE KEYS */;
/*!40000 ALTER TABLE `push_mirror` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reaction`
--

DROP TABLE IF EXISTS `reaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reaction` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `issue_id` bigint(20) NOT NULL,
  `comment_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) NOT NULL,
  `original_author_id` bigint(20) NOT NULL DEFAULT '0',
  `original_author` varchar(255) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_reaction_s` (`type`,`issue_id`,`comment_id`,`user_id`,`original_author_id`,`original_author`),
  KEY `IDX_reaction_user_id` (`user_id`),
  KEY `IDX_reaction_original_author_id` (`original_author_id`),
  KEY `IDX_reaction_original_author` (`original_author`),
  KEY `IDX_reaction_created_unix` (`created_unix`),
  KEY `IDX_reaction_type` (`type`),
  KEY `IDX_reaction_issue_id` (`issue_id`),
  KEY `IDX_reaction_comment_id` (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reaction`
--

LOCK TABLES `reaction` WRITE;
/*!40000 ALTER TABLE `reaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `reaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `release`
--

DROP TABLE IF EXISTS `release`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `release` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) DEFAULT NULL,
  `publisher_id` bigint(20) DEFAULT NULL,
  `tag_name` varchar(255) DEFAULT NULL,
  `original_author` varchar(255) DEFAULT NULL,
  `original_author_id` bigint(20) DEFAULT NULL,
  `lower_tag_name` varchar(255) DEFAULT NULL,
  `target` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `sha1` varchar(40) DEFAULT NULL,
  `num_commits` bigint(20) DEFAULT NULL,
  `note` text,
  `is_draft` tinyint(1) NOT NULL DEFAULT '0',
  `is_prerelease` tinyint(1) NOT NULL DEFAULT '0',
  `is_tag` tinyint(1) NOT NULL DEFAULT '0',
  `created_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_release_n` (`repo_id`,`tag_name`),
  KEY `IDX_release_repo_id` (`repo_id`),
  KEY `IDX_release_publisher_id` (`publisher_id`),
  KEY `IDX_release_tag_name` (`tag_name`),
  KEY `IDX_release_original_author_id` (`original_author_id`),
  KEY `IDX_release_created_unix` (`created_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `release`
--

LOCK TABLES `release` WRITE;
/*!40000 ALTER TABLE `release` DISABLE KEYS */;
/*!40000 ALTER TABLE `release` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `renamed_branch`
--

DROP TABLE IF EXISTS `renamed_branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `renamed_branch` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) NOT NULL,
  `from` varchar(255) DEFAULT NULL,
  `to` varchar(255) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_renamed_branch_repo_id` (`repo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `renamed_branch`
--

LOCK TABLES `renamed_branch` WRITE;
/*!40000 ALTER TABLE `renamed_branch` DISABLE KEYS */;
/*!40000 ALTER TABLE `renamed_branch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repo_archiver`
--

DROP TABLE IF EXISTS `repo_archiver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `repo_archiver` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `commit_id` varchar(40) DEFAULT NULL,
  `created_unix` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_repo_archiver_s` (`repo_id`,`type`,`commit_id`),
  KEY `IDX_repo_archiver_created_unix` (`created_unix`),
  KEY `IDX_repo_archiver_repo_id` (`repo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repo_archiver`
--

LOCK TABLES `repo_archiver` WRITE;
/*!40000 ALTER TABLE `repo_archiver` DISABLE KEYS */;
/*!40000 ALTER TABLE `repo_archiver` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repo_indexer_status`
--

DROP TABLE IF EXISTS `repo_indexer_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `repo_indexer_status` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) DEFAULT NULL,
  `commit_sha` varchar(40) DEFAULT NULL,
  `indexer_type` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `IDX_repo_indexer_status_s` (`repo_id`,`indexer_type`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repo_indexer_status`
--

LOCK TABLES `repo_indexer_status` WRITE;
/*!40000 ALTER TABLE `repo_indexer_status` DISABLE KEYS */;
INSERT INTO `repo_indexer_status` VALUES (3,4,'955e380e134f8172faade017ed39e44ec79a882d',1);
/*!40000 ALTER TABLE `repo_indexer_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repo_redirect`
--

DROP TABLE IF EXISTS `repo_redirect`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `repo_redirect` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner_id` bigint(20) DEFAULT NULL,
  `lower_name` varchar(255) NOT NULL,
  `redirect_repo_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_repo_redirect_s` (`owner_id`,`lower_name`),
  KEY `IDX_repo_redirect_lower_name` (`lower_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repo_redirect`
--

LOCK TABLES `repo_redirect` WRITE;
/*!40000 ALTER TABLE `repo_redirect` DISABLE KEYS */;
/*!40000 ALTER TABLE `repo_redirect` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repo_topic`
--

DROP TABLE IF EXISTS `repo_topic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `repo_topic` (
  `repo_id` bigint(20) NOT NULL,
  `topic_id` bigint(20) NOT NULL,
  PRIMARY KEY (`repo_id`,`topic_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repo_topic`
--

LOCK TABLES `repo_topic` WRITE;
/*!40000 ALTER TABLE `repo_topic` DISABLE KEYS */;
/*!40000 ALTER TABLE `repo_topic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repo_transfer`
--

DROP TABLE IF EXISTS `repo_transfer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `repo_transfer` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `doer_id` bigint(20) DEFAULT NULL,
  `recipient_id` bigint(20) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `team_i_ds` text,
  `created_unix` bigint(20) NOT NULL,
  `updated_unix` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_repo_transfer_created_unix` (`created_unix`),
  KEY `IDX_repo_transfer_updated_unix` (`updated_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repo_transfer`
--

LOCK TABLES `repo_transfer` WRITE;
/*!40000 ALTER TABLE `repo_transfer` DISABLE KEYS */;
/*!40000 ALTER TABLE `repo_transfer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repo_unit`
--

DROP TABLE IF EXISTS `repo_unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `repo_unit` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `config` text,
  `created_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_repo_unit_created_unix` (`created_unix`),
  KEY `IDX_repo_unit_s` (`repo_id`,`type`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repo_unit`
--

LOCK TABLES `repo_unit` WRITE;
/*!40000 ALTER TABLE `repo_unit` DISABLE KEYS */;
INSERT INTO `repo_unit` VALUES (22,4,1,NULL,1727159725),(23,4,2,'{\"EnableTimetracker\":true,\"AllowOnlyContributorsToTrackTime\":true,\"EnableDependencies\":true}',1727159725),(24,4,3,'{\"IgnoreWhitespaceConflicts\":false,\"AllowMerge\":true,\"AllowRebase\":true,\"AllowRebaseMerge\":true,\"AllowSquash\":true,\"AllowManualMerge\":false,\"AutodetectManualMerge\":false,\"AllowRebaseUpdate\":true,\"DefaultDeleteBranchAfterMerge\":false,\"DefaultMergeStyle\":\"merge\",\"DefaultAllowMaintainerEdit\":false}',1727159725),(25,4,4,NULL,1727159725),(26,4,5,NULL,1727159725),(27,4,8,NULL,1727159725),(28,4,9,NULL,1727159725);
/*!40000 ALTER TABLE `repo_unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repository`
--

DROP TABLE IF EXISTS `repository`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `repository` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner_id` bigint(20) DEFAULT NULL,
  `owner_name` varchar(255) DEFAULT NULL,
  `lower_name` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `website` varchar(2048) DEFAULT NULL,
  `original_service_type` int(11) DEFAULT NULL,
  `original_url` varchar(2048) DEFAULT NULL,
  `default_branch` varchar(255) DEFAULT NULL,
  `num_watches` int(11) DEFAULT NULL,
  `num_stars` int(11) DEFAULT NULL,
  `num_forks` int(11) DEFAULT NULL,
  `num_issues` int(11) DEFAULT NULL,
  `num_closed_issues` int(11) DEFAULT NULL,
  `num_pulls` int(11) DEFAULT NULL,
  `num_closed_pulls` int(11) DEFAULT NULL,
  `num_milestones` int(11) NOT NULL DEFAULT '0',
  `num_closed_milestones` int(11) NOT NULL DEFAULT '0',
  `num_projects` int(11) NOT NULL DEFAULT '0',
  `num_closed_projects` int(11) NOT NULL DEFAULT '0',
  `num_action_runs` int(11) NOT NULL DEFAULT '0',
  `num_closed_action_runs` int(11) NOT NULL DEFAULT '0',
  `is_private` tinyint(1) DEFAULT NULL,
  `is_empty` tinyint(1) DEFAULT NULL,
  `is_archived` tinyint(1) DEFAULT NULL,
  `is_mirror` tinyint(1) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `is_fork` tinyint(1) NOT NULL DEFAULT '0',
  `fork_id` bigint(20) DEFAULT NULL,
  `is_template` tinyint(1) NOT NULL DEFAULT '0',
  `template_id` bigint(20) DEFAULT NULL,
  `size` bigint(20) NOT NULL DEFAULT '0',
  `git_size` bigint(20) NOT NULL DEFAULT '0',
  `lfs_size` bigint(20) NOT NULL DEFAULT '0',
  `is_fsck_enabled` tinyint(1) NOT NULL DEFAULT '1',
  `close_issues_via_commit_in_any_branch` tinyint(1) NOT NULL DEFAULT '0',
  `topics` text,
  `trust_model` int(11) DEFAULT NULL,
  `avatar` varchar(64) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  `archived_unix` bigint(20) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_repository_s` (`owner_id`,`lower_name`),
  KEY `IDX_repository_owner_id` (`owner_id`),
  KEY `IDX_repository_original_service_type` (`original_service_type`),
  KEY `IDX_repository_is_private` (`is_private`),
  KEY `IDX_repository_template_id` (`template_id`),
  KEY `IDX_repository_fork_id` (`fork_id`),
  KEY `IDX_repository_lower_name` (`lower_name`),
  KEY `IDX_repository_is_mirror` (`is_mirror`),
  KEY `IDX_repository_is_fork` (`is_fork`),
  KEY `IDX_repository_created_unix` (`created_unix`),
  KEY `IDX_repository_updated_unix` (`updated_unix`),
  KEY `IDX_repository_name` (`name`),
  KEY `IDX_repository_is_empty` (`is_empty`),
  KEY `IDX_repository_is_archived` (`is_archived`),
  KEY `IDX_repository_is_template` (`is_template`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repository`
--

LOCK TABLES `repository` WRITE;
/*!40000 ALTER TABLE `repository` DISABLE KEYS */;
INSERT INTO `repository` VALUES (4,1,'root','arms','ARMS','ARMS 의 Global Config 설정용 레파지토리 입니다.','',0,'','main',1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24467,24467,0,1,0,'null',0,'',1727159725,1727177854,0);
/*!40000 ALTER TABLE `repository` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `review` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `type` int(11) DEFAULT NULL,
  `reviewer_id` bigint(20) DEFAULT NULL,
  `reviewer_team_id` bigint(20) NOT NULL DEFAULT '0',
  `original_author` varchar(255) DEFAULT NULL,
  `original_author_id` bigint(20) DEFAULT NULL,
  `issue_id` bigint(20) DEFAULT NULL,
  `content` text,
  `official` tinyint(1) NOT NULL DEFAULT '0',
  `commit_id` varchar(40) DEFAULT NULL,
  `stale` tinyint(1) NOT NULL DEFAULT '0',
  `dismissed` tinyint(1) NOT NULL DEFAULT '0',
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_review_reviewer_id` (`reviewer_id`),
  KEY `IDX_review_issue_id` (`issue_id`),
  KEY `IDX_review_created_unix` (`created_unix`),
  KEY `IDX_review_updated_unix` (`updated_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review_state`
--

DROP TABLE IF EXISTS `review_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `review_state` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `pull_id` bigint(20) NOT NULL DEFAULT '0',
  `commit_sha` varchar(40) NOT NULL,
  `updated_files` text NOT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_review_state_pull_commit_user` (`user_id`,`pull_id`,`commit_sha`),
  KEY `IDX_review_state_pull_id` (`pull_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review_state`
--

LOCK TABLES `review_state` WRITE;
/*!40000 ALTER TABLE `review_state` DISABLE KEYS */;
/*!40000 ALTER TABLE `review_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `secret`
--

DROP TABLE IF EXISTS `secret`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `secret` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner_id` bigint(20) NOT NULL,
  `repo_id` bigint(20) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL,
  `data` longtext,
  `created_unix` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_secret_owner_repo_name` (`owner_id`,`repo_id`,`name`),
  KEY `IDX_secret_owner_id` (`owner_id`),
  KEY `IDX_secret_repo_id` (`repo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `secret`
--

LOCK TABLES `secret` WRITE;
/*!40000 ALTER TABLE `secret` DISABLE KEYS */;
/*!40000 ALTER TABLE `secret` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `session` (
  `key` char(16) NOT NULL,
  `data` blob,
  `expiry` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `star`
--

DROP TABLE IF EXISTS `star`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `star` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_star_s` (`uid`,`repo_id`),
  KEY `IDX_star_created_unix` (`created_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `star`
--

LOCK TABLES `star` WRITE;
/*!40000 ALTER TABLE `star` DISABLE KEYS */;
/*!40000 ALTER TABLE `star` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stopwatch`
--

DROP TABLE IF EXISTS `stopwatch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stopwatch` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `issue_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_stopwatch_user_id` (`user_id`),
  KEY `IDX_stopwatch_issue_id` (`issue_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stopwatch`
--

LOCK TABLES `stopwatch` WRITE;
/*!40000 ALTER TABLE `stopwatch` DISABLE KEYS */;
/*!40000 ALTER TABLE `stopwatch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_setting`
--

DROP TABLE IF EXISTS `system_setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_setting` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `setting_key` varchar(255) DEFAULT NULL,
  `setting_value` text,
  `version` int(11) DEFAULT NULL,
  `created` bigint(20) DEFAULT NULL,
  `updated` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_system_setting_setting_key` (`setting_key`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_setting`
--

LOCK TABLES `system_setting` WRITE;
/*!40000 ALTER TABLE `system_setting` DISABLE KEYS */;
INSERT INTO `system_setting` VALUES (1,'revision','',2,1720858355,1720858355),(2,'picture.disable_gravatar','false',1,1720858355,1720858355),(3,'picture.enable_federated_avatar','true',1,1720858355,1720858355);
/*!40000 ALTER TABLE `system_setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `doer_id` bigint(20) DEFAULT NULL,
  `owner_id` bigint(20) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `start_time` bigint(20) DEFAULT NULL,
  `end_time` bigint(20) DEFAULT NULL,
  `payload_content` text,
  `message` text,
  `created` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_task_doer_id` (`doer_id`),
  KEY `IDX_task_owner_id` (`owner_id`),
  KEY `IDX_task_repo_id` (`repo_id`),
  KEY `IDX_task_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `team` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `org_id` bigint(20) DEFAULT NULL,
  `lower_name` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `authorize` int(11) DEFAULT NULL,
  `num_repos` int(11) DEFAULT NULL,
  `num_members` int(11) DEFAULT NULL,
  `includes_all_repositories` tinyint(1) NOT NULL DEFAULT '0',
  `can_create_org_repo` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `IDX_team_org_id` (`org_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_invite`
--

DROP TABLE IF EXISTS `team_invite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `team_invite` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL DEFAULT '',
  `inviter_id` bigint(20) NOT NULL DEFAULT '0',
  `org_id` bigint(20) NOT NULL DEFAULT '0',
  `team_id` bigint(20) NOT NULL DEFAULT '0',
  `email` varchar(255) NOT NULL DEFAULT '',
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_team_invite_team_mail` (`team_id`,`email`),
  KEY `IDX_team_invite_team_id` (`team_id`),
  KEY `IDX_team_invite_created_unix` (`created_unix`),
  KEY `IDX_team_invite_updated_unix` (`updated_unix`),
  KEY `IDX_team_invite_token` (`token`),
  KEY `IDX_team_invite_org_id` (`org_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_invite`
--

LOCK TABLES `team_invite` WRITE;
/*!40000 ALTER TABLE `team_invite` DISABLE KEYS */;
/*!40000 ALTER TABLE `team_invite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_repo`
--

DROP TABLE IF EXISTS `team_repo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `team_repo` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `org_id` bigint(20) DEFAULT NULL,
  `team_id` bigint(20) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_team_repo_s` (`team_id`,`repo_id`),
  KEY `IDX_team_repo_org_id` (`org_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_repo`
--

LOCK TABLES `team_repo` WRITE;
/*!40000 ALTER TABLE `team_repo` DISABLE KEYS */;
/*!40000 ALTER TABLE `team_repo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_unit`
--

DROP TABLE IF EXISTS `team_unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `team_unit` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `org_id` bigint(20) DEFAULT NULL,
  `team_id` bigint(20) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `access_mode` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_team_unit_s` (`team_id`,`type`),
  KEY `IDX_team_unit_org_id` (`org_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_unit`
--

LOCK TABLES `team_unit` WRITE;
/*!40000 ALTER TABLE `team_unit` DISABLE KEYS */;
/*!40000 ALTER TABLE `team_unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_user`
--

DROP TABLE IF EXISTS `team_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `team_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `org_id` bigint(20) DEFAULT NULL,
  `team_id` bigint(20) DEFAULT NULL,
  `uid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_team_user_s` (`team_id`,`uid`),
  KEY `IDX_team_user_org_id` (`org_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_user`
--

LOCK TABLES `team_user` WRITE;
/*!40000 ALTER TABLE `team_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `team_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `topic`
--

DROP TABLE IF EXISTS `topic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `topic` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `repo_count` int(11) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_topic_name` (`name`),
  KEY `IDX_topic_created_unix` (`created_unix`),
  KEY `IDX_topic_updated_unix` (`updated_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topic`
--

LOCK TABLES `topic` WRITE;
/*!40000 ALTER TABLE `topic` DISABLE KEYS */;
/*!40000 ALTER TABLE `topic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tracked_time`
--

DROP TABLE IF EXISTS `tracked_time`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tracked_time` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `issue_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `time` bigint(20) NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `IDX_tracked_time_issue_id` (`issue_id`),
  KEY `IDX_tracked_time_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tracked_time`
--

LOCK TABLES `tracked_time` WRITE;
/*!40000 ALTER TABLE `tracked_time` DISABLE KEYS */;
/*!40000 ALTER TABLE `tracked_time` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `two_factor`
--

DROP TABLE IF EXISTS `two_factor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `two_factor` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) DEFAULT NULL,
  `secret` varchar(255) DEFAULT NULL,
  `scratch_salt` varchar(255) DEFAULT NULL,
  `scratch_hash` varchar(255) DEFAULT NULL,
  `last_used_passcode` varchar(10) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_two_factor_uid` (`uid`),
  KEY `IDX_two_factor_created_unix` (`created_unix`),
  KEY `IDX_two_factor_updated_unix` (`updated_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `two_factor`
--

LOCK TABLES `two_factor` WRITE;
/*!40000 ALTER TABLE `two_factor` DISABLE KEYS */;
/*!40000 ALTER TABLE `two_factor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `upload`
--

DROP TABLE IF EXISTS `upload`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `upload` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uuid` varchar(40) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_upload_uuid` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `upload`
--

LOCK TABLES `upload` WRITE;
/*!40000 ALTER TABLE `upload` DISABLE KEYS */;
/*!40000 ALTER TABLE `upload` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `lower_name` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `keep_email_private` tinyint(1) DEFAULT NULL,
  `email_notifications_preference` varchar(20) NOT NULL DEFAULT 'enabled',
  `passwd` varchar(255) NOT NULL,
  `passwd_hash_algo` varchar(255) NOT NULL DEFAULT 'argon2',
  `must_change_password` tinyint(1) NOT NULL DEFAULT '0',
  `login_type` int(11) DEFAULT NULL,
  `login_source` bigint(20) NOT NULL DEFAULT '0',
  `login_name` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `rands` varchar(32) DEFAULT NULL,
  `salt` varchar(32) DEFAULT NULL,
  `language` varchar(5) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  `last_login_unix` bigint(20) DEFAULT NULL,
  `last_repo_visibility` tinyint(1) DEFAULT NULL,
  `max_repo_creation` int(11) NOT NULL DEFAULT '-1',
  `is_active` tinyint(1) DEFAULT NULL,
  `is_admin` tinyint(1) DEFAULT NULL,
  `is_restricted` tinyint(1) NOT NULL DEFAULT '0',
  `allow_git_hook` tinyint(1) DEFAULT NULL,
  `allow_import_local` tinyint(1) DEFAULT NULL,
  `allow_create_organization` tinyint(1) DEFAULT '1',
  `prohibit_login` tinyint(1) NOT NULL DEFAULT '0',
  `avatar` varchar(2048) NOT NULL,
  `avatar_email` varchar(255) NOT NULL,
  `use_custom_avatar` tinyint(1) DEFAULT NULL,
  `num_followers` int(11) DEFAULT NULL,
  `num_following` int(11) NOT NULL DEFAULT '0',
  `num_stars` int(11) DEFAULT NULL,
  `num_repos` int(11) DEFAULT NULL,
  `num_teams` int(11) DEFAULT NULL,
  `num_members` int(11) DEFAULT NULL,
  `visibility` int(11) NOT NULL DEFAULT '0',
  `repo_admin_change_team_access` tinyint(1) NOT NULL DEFAULT '0',
  `diff_view_style` varchar(255) NOT NULL DEFAULT '',
  `theme` varchar(255) NOT NULL DEFAULT '',
  `keep_activity_private` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_user_lower_name` (`lower_name`),
  UNIQUE KEY `UQE_user_name` (`name`),
  KEY `IDX_user_created_unix` (`created_unix`),
  KEY `IDX_user_updated_unix` (`updated_unix`),
  KEY `IDX_user_last_login_unix` (`last_login_unix`),
  KEY `IDX_user_is_active` (`is_active`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'root','root','','313cokr@gmail.com',0,'enabled','4a492f3b088de57d836307942c27a01fd2ddfc41febe6e413361d8c3b8c623a148a611290a1a85d80b17865353f56d151c4d','pbkdf2$50000$50',0,0,0,'',0,'','','92a825b9345d03fb62f22c20967af335','b5342081081b46ab1080a6db9501370a','ko-KR','',1720859496,1727166484,1727166484,0,-1,1,0,0,0,0,0,0,'','313cokr@gmail.com',0,0,0,0,1,0,0,0,0,'','auto',0),(2,'dumbbelloper','dumbbelloper','','dumbbelloper@gmail.com',0,'enabled','595d60213e67297d274f350ed98a7787e805de7a0dd483bb062c0dc44e3302d975b0e47b298837b11a93a1cbd580cecbb241','pbkdf2$50000$50',0,0,0,'',0,'','','88926262c035fec6b2a9936dd42ad634','60020f5c1aeed38c8ced6dd25f668d75','ko-KR','',1723779347,1723779348,1723779348,0,-1,1,0,0,0,0,1,0,'','dumbbelloper@gmail.com',0,0,0,0,0,0,0,0,0,'','auto',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_badge`
--

DROP TABLE IF EXISTS `user_badge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_badge` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `badge_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_user_badge_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_badge`
--

LOCK TABLES `user_badge` WRITE;
/*!40000 ALTER TABLE `user_badge` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_badge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_open_id`
--

DROP TABLE IF EXISTS `user_open_id`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_open_id` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) NOT NULL,
  `uri` varchar(255) NOT NULL,
  `show` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_user_open_id_uri` (`uri`),
  KEY `IDX_user_open_id_uid` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_open_id`
--

LOCK TABLES `user_open_id` WRITE;
/*!40000 ALTER TABLE `user_open_id` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_open_id` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_redirect`
--

DROP TABLE IF EXISTS `user_redirect`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_redirect` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `lower_name` varchar(255) NOT NULL,
  `redirect_user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_user_redirect_s` (`lower_name`),
  KEY `IDX_user_redirect_lower_name` (`lower_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_redirect`
--

LOCK TABLES `user_redirect` WRITE;
/*!40000 ALTER TABLE `user_redirect` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_redirect` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_setting`
--

DROP TABLE IF EXISTS `user_setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_setting` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `setting_key` varchar(255) DEFAULT NULL,
  `setting_value` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_user_setting_key_userid` (`user_id`,`setting_key`),
  KEY `IDX_user_setting_user_id` (`user_id`),
  KEY `IDX_user_setting_setting_key` (`setting_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_setting`
--

LOCK TABLES `user_setting` WRITE;
/*!40000 ALTER TABLE `user_setting` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `version`
--

DROP TABLE IF EXISTS `version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `version` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `version` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `version`
--

LOCK TABLES `version` WRITE;
/*!40000 ALTER TABLE `version` DISABLE KEYS */;
INSERT INTO `version` VALUES (1,280);
/*!40000 ALTER TABLE `version` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `watch`
--

DROP TABLE IF EXISTS `watch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `watch` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `repo_id` bigint(20) DEFAULT NULL,
  `mode` smallint(6) NOT NULL DEFAULT '1',
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_watch_watch` (`user_id`,`repo_id`),
  KEY `IDX_watch_created_unix` (`created_unix`),
  KEY `IDX_watch_updated_unix` (`updated_unix`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `watch`
--

LOCK TABLES `watch` WRITE;
/*!40000 ALTER TABLE `watch` DISABLE KEYS */;
INSERT INTO `watch` VALUES (5,1,4,1,1727159725,1727159725);
/*!40000 ALTER TABLE `watch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `webauthn_credential`
--

DROP TABLE IF EXISTS `webauthn_credential`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `webauthn_credential` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `lower_name` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `credential_id` varbinary(1024) DEFAULT NULL,
  `public_key` blob,
  `attestation_type` varchar(255) DEFAULT NULL,
  `aaguid` blob,
  `sign_count` bigint(20) DEFAULT NULL,
  `clone_warning` tinyint(1) DEFAULT NULL,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQE_webauthn_credential_s` (`lower_name`,`user_id`),
  KEY `IDX_webauthn_credential_updated_unix` (`updated_unix`),
  KEY `IDX_webauthn_credential_user_id` (`user_id`),
  KEY `IDX_webauthn_credential_credential_id` (`credential_id`),
  KEY `IDX_webauthn_credential_created_unix` (`created_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `webauthn_credential`
--

LOCK TABLES `webauthn_credential` WRITE;
/*!40000 ALTER TABLE `webauthn_credential` DISABLE KEYS */;
/*!40000 ALTER TABLE `webauthn_credential` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `webhook`
--

DROP TABLE IF EXISTS `webhook`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `webhook` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `repo_id` bigint(20) DEFAULT NULL,
  `owner_id` bigint(20) DEFAULT NULL,
  `is_system_webhook` tinyint(1) DEFAULT NULL,
  `url` text,
  `http_method` varchar(255) DEFAULT NULL,
  `content_type` int(11) DEFAULT NULL,
  `secret` text,
  `events` text,
  `is_active` tinyint(1) DEFAULT NULL,
  `type` varchar(16) DEFAULT NULL,
  `meta` text,
  `last_status` int(11) DEFAULT NULL,
  `header_authorization_encrypted` text,
  `created_unix` bigint(20) DEFAULT NULL,
  `updated_unix` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_webhook_repo_id` (`repo_id`),
  KEY `IDX_webhook_owner_id` (`owner_id`),
  KEY `IDX_webhook_is_active` (`is_active`),
  KEY `IDX_webhook_created_unix` (`created_unix`),
  KEY `IDX_webhook_updated_unix` (`updated_unix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `webhook`
--

LOCK TABLES `webhook` WRITE;
/*!40000 ALTER TABLE `webhook` DISABLE KEYS */;
/*!40000 ALTER TABLE `webhook` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-24 20:41:42
