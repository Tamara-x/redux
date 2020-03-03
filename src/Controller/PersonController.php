<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Person;
use App\Repository\PersonRepository;
use Doctrine\ORM\EntityManagerInterface;

class PersonController extends AbstractController
{

    private $personRepository;
    private $entityManager;

    public function __construct(PersonRepository $personRepository, EntityManagerInterface $entityManager)
    {
        $this->personRepository = $personRepository;
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/", name="person")
     */
    public function index()
    {
        return $this->render('person/index.html.twig', [
            'controller_name' => 'PersonController',
        ]);
    }

    /**
     * @Route("/get", name="PersonGet", methods={"GET"})
     */
    public function getPerson(Request $request)
    {
        $person = $this->personRepository->findAll();

        $arr =(array) $person;


        return $this->json($arr);
    }

}
