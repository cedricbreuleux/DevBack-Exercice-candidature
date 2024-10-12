<?php

namespace App\Command;

use App\Entity\Admin;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(
    name: 'AdminCreating',
    description: 'Command pour créer un administrateur.',
)]
class AdminCreatingCommand extends Command
{   
    private $entityManager;
    private $passwordHasher;

    public function __construct(EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordHasher)
    {
        $this->entityManager = $entityManager;
        $this->passwordHasher = $passwordHasher;
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('email', InputArgument::REQUIRED, 'Email admin')
            ->addArgument('password', InputArgument::REQUIRED, 'Password admin')

        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $email = $input->getArgument('email');
        $password = $input->getArgument('password');

        $io->success(message: 'L\'administrateur '.$email .' a été crée.');

        if($email && $password) {
            $admin = new Admin();
            $admin->setEmail($email);
            $admin->setRoles(["ROLE_ADMIN"]);
            $admin->setPassword($this->passwordHasher->hashPassword($admin, $password));

            $this->entityManager->persist($admin);
            $this->entityManager->flush();

            return Command::SUCCESS;
        }
        $io->error(message: 'Email ou mot de passe manuant.');
        return Command::FAILURE;
    }
}
