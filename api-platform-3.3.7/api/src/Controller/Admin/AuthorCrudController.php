<?php

namespace App\Controller\Admin;

use App\Entity\Author;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class AuthorCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Author::class;
    }

    public function configureFields(string $pageName): iterable
    {
        $user = $this->getUser();
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('firstName')->setLabel('Prénom'),
            TextField::new('lastName')->setLabel('Nom'),
            DateField::new('birthDate')->setLabel('Date de naissance'),
            TextField::new('nationality')->setLabel('Nationalité'),
            TextField::new('createdBy')->setLabel('Utilisateur créateur')->hideOnForm(),
            DateTimeField::new('createdAt')->setLabel('Date de création')->hideOnForm(),
            DateTimeField::new('updatedAt')->setLabel('Date de mise à jour')->hideOnForm(),
        ];
    }
    public function createEntity(string $entityFqcn)
    {   
        $admin = $this->getUser();

        $author = new Author();
        $author->setCreatedBy($admin->getUserIdentifier());

        return $author;
    }
}
