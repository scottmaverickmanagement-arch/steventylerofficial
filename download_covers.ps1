$albums = @{
    "Aerosmith.jpg" = "8a58cc1a-be0d-3b1b-8d0d-aa8f467a59da"
    "Get_Your_Wings.jpg" = "29346fb6-69c8-3f12-90c3-9d6cbce18259"
    "Toys_in_the_Attic.jpg" = "d03bb6b1-d7b4-38ea-974e-847cbb31dca4"
    "Rocks.jpg" = "775d9a2d-effc-35c8-b80a-f9a4e4206d27"
    "Draw_the_Line.jpg" = "8c064b13-6668-3d6c-a508-1e5d671a207d"
    "Night_in_the_Ruts.jpg" = "5aad45b5-1b5c-3764-9386-dd3efcc6a16d"
    "Rock_in_a_Hard_Place.jpg" = "1b1fddf5-4faa-3da6-a36b-b512f3e92046"
    "Done_with_Mirrors.jpg" = "c4e9623e-19c6-34ab-8fce-4e8a4f4d3f76"
    "Permanent_Vacation.jpg" = "c522e905-3986-3f09-89f3-5d8bb09cc93e"
    "Pump.jpg" = "8f174877-ffc4-39b9-b247-a39fff4097a1"
    "Get_a_Grip.jpg" = "73c6a7b0-1dc2-3ddc-a720-c29505271711"
    "Nine_Lives.jpg" = "7b30dd01-ee8f-392c-862d-4598e46b83f8"
    "Just_Push_Play.jpg" = "2fb275a3-1cd9-33b6-95e4-70fe3f092649"
    "Honkin_on_Bobo.jpg" = "65ad56ff-dcef-378c-b172-4a92aedb6958"
    "Music_from_Another_Dimension.jpg" = "1ffa5a81-67c9-4e39-af6e-fcb4b101ddef"
}

foreach ($name in $albums.Keys) {
    $mbid = $albums[$name]
    $url = "http://coverartarchive.org/release-group/$mbid/front"
    $output = "public/images/albums/$name"
    Write-Host "Downloading $name..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $output -ErrorAction Stop
    } catch {
        Write-Host "Failed to download $name via PowerShell, trying curl..."
        $cmd = "curl -L --ssl-no-revoke -o `"$output`" `"$url`""
        cmd /c $cmd
    }
}
