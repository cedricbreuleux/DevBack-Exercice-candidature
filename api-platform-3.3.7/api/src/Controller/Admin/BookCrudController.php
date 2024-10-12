<?php

namespace App\Controller\Admin;

use App\Entity\Book;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;

class BookCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Book::class;
    }

    public function configureFields(string $pageName): iterable
    {   
        
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('title')->setLabel('Titre'),
            TextEditorField::new('summary')->setLabel('Résumé'),
            DateField::new('publishedAt')->setLabel('Date de publication'),
            AssociationField::new('author')->setLabel('Auteur'),
            TextField::new('createdBy')->setLabel('Utilisateur créateur')->hideOnForm(),
            DateTimeField::new('createdAt')->setLabel('Date de création')->hideOnForm(),
            DateTimeField::new('updatedAt')->setLabel('Date de mise à jour')->hideOnForm(),
        ];
    }
    public function createEntity(string $entityFqcn)
    {   
        $admin = $this->getUser();

        $book = new Book();
        $book->setCreatedBy($admin->getUserIdentifier());

        return $book;
    }
}
