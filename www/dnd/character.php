<?php


class character
{

    public $name;
    public $class;
    public $level;

    /*public $player;
    public $background;
    public $alignment;
    public $xp;

    public $stats = array (
        "strength" => 0,
        "dexterity" => 0,
        "constitution" => 0,
        "intelligence" => 0,
        "wisdom" => 0,
        "charisma" => 0
    );

    public $AC;
    public $hit_dice;
    public $max_hp;
    public $curr_hp;
    public $money;*/

    function saveToXML()
    {
        if (!file_exists("characters.xml")) {
            $xml = new XMLWriter();
            $xml->openMemory();
            $xml->startDocument('1.0', 'UTF-8');

            $xml->startElement("characters");
            $xml->startElement("character");
            $xml->startElement("name", $this->name);
            $xml->writeAttribute("class", $this->class);
            $xml->writeAttribute("level", $this->level);
            $xml->endElement();
            $xml->endElement();

            file_put_contents("characters.xml", $xml->outputMemory());
        } else {
            $songs = simplexml_load_file('characters.xml');
            echo $songs->song[0]->artist;
        }
    }
}