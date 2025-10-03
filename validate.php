<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

// Get referrer
$referrer = $_SERVER['HTTP_REFERER'] ?? '';

// Get URL parameters from POST body or GET
$urlParams = [];
if (isset($_POST['qs']) && !empty($_POST['qs'])) {
  $qs = $_POST['qs'];
  // Remove leading ? if present
  if (strpos($qs, '?') === 0) {
    $qs = substr($qs, 1);
  }
  parse_str($qs, $urlParams);
}

// Check URL parameters
$hasSub6 = (isset($_GET['sub6']) && !empty($_GET['sub6'])) || (isset($urlParams['sub6']) && !empty($urlParams['sub6']));
$hasCorrectKey = (isset($_GET['key']) && $_GET['key'] === 'X184GA') || (isset($urlParams['key']) && $urlParams['key'] === 'X184GA');

// Blocked domains list
$watchedDomains = [
  "adspy.com",
  "bigspy.com",
  "minea.com",
  "adspyder.io",
  "adflex.io",
  "poweradspy.com",
  "dropispy.com",
  "socialpeta.com",
  "adstransparency.google.com",
  "facebook.com/ads/library",
  "adbeat.com",
  "anstrex.com",
  "semrush.com",
  "autods.com",
  "foreplay.co",
  "spyfu.com",
  "adplexity.com",
  "spypush.com",
  "nativeadbuzz.com",
  "spyover.com",
  "videoadvault.com",
  "admobispy.com",
  "ispionage.com",
  "similarweb.com",
  "pipiads.com",
  "adespresso.com"
  // Add more domains here as needed
];

$isValidated = 1; // Default to valid

// Check URL parameters first
if (!$hasSub6 || !$hasCorrectKey) {
  $isValidated = 0; // Blocked - missing required parameters
}

// Check if referrer is from blocked domain (only if parameters are valid)
if ($isValidated === 1 && $referrer) {
  $parsedUrl = parse_url($referrer);
  if ($parsedUrl && isset($parsedUrl['host'])) {
    $referrerHost = strtolower($parsedUrl['host']);

    foreach ($watchedDomains as $blockedDomain) {
      if (strpos($referrerHost, strtolower($blockedDomain)) !== false) {
        $isValidated = 0; // Blocked
        break;
      }
    }
  }
}

// Return simple validation result
echo json_encode([
  'validated' => $isValidated
]);
