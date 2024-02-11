<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");



if ($_SERVER['REQUEST_METHOD'] == "POST")
{	
	$info = pathinfo($_FILES['file']['name']);
	
	// Clean folder
	$files = glob('./*.*'); 
	foreach($files as $file){ 
        if ($file == ".htaccess") continue;
        if ($file == "deploy.php") continue;
	  if(is_file($file)) {
		 // echo "- ".$file."\n";
		unlink($file); 
	  }
	}
	
	$pack = "dist.zip";
	move_uploaded_file($_FILES['file']['tmp_name'], "./".$pack);
	 
	$extractPath = ".";
		  
	$zip = new ZipArchive; 
	if ($zip->open($pack) === TRUE) 
	{
		if ($zip->extractTo(".") === TRUE) 
		{
			$zip->close();
			
			$files = glob('./*.*'); 
				
			foreach($files as $file)
			{ 
				if(is_file($file)) 
				{		
					echo "- ".$file."\n";
					
					$cats = explode("\\", $file);
					if (count($cats)> 1)
					{
						$last = array_pop($cats);
						echo "   file: ".$last."\n";

						for ($i=0; $i<=count($cats); $i++)
						{
							$p = implode("/",array_slice($cats, 0, $i));
							if ($p && !file_exists($p))
							{
								echo "   mkdir: ".$p . "\n";
								mkdir($p);
							}
						}
						
						$dir = implode("/", $cats);
						rename($file, $dir."/".$last);
						
					}
					else echo "   nothing to explode"."\n";
					
				}
			}
					
			unlink($pack);
			exit("DEPLOYED.");
		} 
		else 
		{
			exit('ZIP.EXTRACTION FAILED: '.$zip->getStatus());
		}
	} 
	else 
	{
		exit('ZIP.OPEN FAILED: '.$zip->getStatus());
	}
}
else exit("You can only POST here");