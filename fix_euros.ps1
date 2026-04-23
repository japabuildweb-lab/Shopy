$content = Get-Content 'public\index.html' -Raw -Encoding UTF8
$content = $content -replace ',', '€'
$content | Set-Content 'public\index.html' -Encoding UTF8
Write-Host "Replaced broken Euros"
