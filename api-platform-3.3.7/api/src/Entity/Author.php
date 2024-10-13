<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\AuthorRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;


#[ApiResource(mercure: true, normalizationContext: ['groups' => ['author:read']])]
#[ApiFilter(SearchFilter::class, properties: ['lastName' => 'ipartial'])]
#[ORM\Entity(repositoryClass: AuthorRepository::class)]
class Author
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['book:read', 'author:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    #[Groups(['book:read', 'author:read'])]
    private ?string $firstName = null;

    #[ORM\Column(length: 100)]
    #[Groups(['book:read', 'author:read'])]
    private ?string $lastName = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(['book:read', 'author:read'])]
    private ?\DateTimeInterface $birthDate = null;

    #[ORM\Column(length: 100, nullable: true)]
    #[Groups(['book:read', 'author:read'])]
    private ?string $nationality = null;

    #[ORM\Column(length: 100)]
    #[Groups(['book:read', 'author:read'])]
    private ?string $createdBy = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[Groups(['book:read', 'author:read'])]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[Groups(['book:read', 'author:read'])]
    private ?\DateTimeInterface $updatedAt = null;

    #[ORM\OneToMany(mappedBy: "author", targetEntity: Book::class)]
    #[Groups(['author:read'])]
    private Collection $books;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): static
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): static
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getBirthDate(): ?\DateTimeInterface
    {
        return $this->birthDate;
    }

    public function setBirthDate(\DateTimeInterface $birthDate): static
    {
        $this->birthDate = $birthDate;

        return $this;
    }

    public function getNationality(): ?string
    {
        return $this->nationality;
    }

    public function setNationality(?string $nationality): static
    {
        $this->nationality = $nationality;

        return $this;
    }

    public function getCreatedBy(): ?string
    {
        return $this->createdBy;
    }

    public function setCreatedBy(string $createdBy): static
    {
        $this->createdBy = $createdBy;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
    
    public function getBooks(): Collection
    {
        return $this->books;
    }

    public function __toString(): string
    {
        return $this->firstName . ' ' . $this->lastName;
    }
    
}
