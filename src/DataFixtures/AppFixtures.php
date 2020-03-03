<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Person;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $person = new Person();
        $person->setName('Tamara');
        $person->setAge('23');
        $manager->persist($person);

        $person = new Person();
        $person->setName('Doga');
        $person->setAge('22');
        $manager->persist($person);

        $person = new Person();
        $person->setName('Danique');
        $person->setAge('18');
        $manager->persist($person);

        $manager->flush();
    }
}
