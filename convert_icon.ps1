Add-Type -AssemblyName System.Drawing
$iconPath = "e:\MTool\Work\win-control-center\app-icon.png"
$outPath = "e:\MTool\Work\win-control-center\app-icon-real.png"
$img = [System.Drawing.Image]::FromFile($iconPath)
$img.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
Write-Host "Conversion Complete"
